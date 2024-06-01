import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const options: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string, 
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks: {
        // specific the user who could login
        async signIn({user, account, profile, email, credentials}) {
            if ( user.id == '117820510') {
                // console.log(user.id)
                return true
            } else {
                return false
            }
        },
        redirect() {
            return "/"
        }
    },
}