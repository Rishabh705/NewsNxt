import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/config/auth.config';
import { z } from 'zod';
import User from '@/Models/Users';
import bcrypt from 'bcryptjs';
import connect from './db';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ name: z.string(), password: z.string() })
          .safeParse(credentials);
        try {

          await connect()

          if (parsedCredentials.success) {
            const { name, password } = parsedCredentials.data

            const user = await User.findOne({ name: name })

            if (!user)
              throw new Error('No such user found.')
            else {
              const passwordsMatch = await bcrypt.compare(password, user.password);
              
              if (passwordsMatch)
                return user;
              else
                throw new Error('Invalid credentials.')
            }
          }
          else {
            throw new Error('Something went wrong.');
          }
        } catch (error) {
          throw error
        }
      },
    }),
  ],
});

