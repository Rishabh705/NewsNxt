'use server'

import { signIn } from "./auth";
import connect from "./db";
import User from "@/Models/Users";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth';
import {redirect} from 'next/navigation'

export async function loginWithCredentials(prevState, formData) {
    try {
        await signIn('credentials', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        error: 'Invalid credentials.'
                    }
                default:
                    return {
                        error: 'Something went wrong.'
                    }
            }
        }
        throw error;
    }
}

export async function registerWithCredentials(prevState, formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password1')

    try {
        await connect()

        //find if user exists
        const user = await User.findOne({ name: name })

        //if user exists, return error
        if (user) {
            return {
                error: "Username already exists"
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        //if user does not exist, create user
        const newUser = new User({name: name, email: email, password: hashedPassword,favs:[] })

        //save user
        await newUser.save()

        
    } catch (err) {
        return {
            error: err.message
        }
    }
    redirect('/login')
}


export async function getFavs(name) {
    try {
        await connect()
        const user = await User.findOne({ name: name })
        return {
            favs:user.favs,
            results:user.favs.length
        }

    } catch (err) {
        return {
            error: err.message
        }
    }
}

export async function setFavorite(name, favItem) {
    try {
        await connect()
        
        const user = await User.findOne({ name: name })
        if(user.favs.includes(favItem)){
            user.favs = user.favs.filter(item => item.toString() !== favItem)
        }
        else{
            user.favs.push(favItem)
        }
        await user.save()
        return user.favs
    } catch (err) {
        return {
            error: err.message
        }
    }
}