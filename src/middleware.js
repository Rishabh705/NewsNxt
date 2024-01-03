import NextAuth from 'next-auth';
import { authConfig } from './config/auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};