import prisma from "@/util/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
           name:"Credentials",
           credentials:{
            email:{label:"Email",type:"text"},
            password:{label:"Password",type:"password"}
           },
           async authorize(credentials:any):Promise<any>{
            try {
                const user = await prisma.user.findUnique({
                    where:{
                        email:credentials.email,
                        password:credentials.password,
                    }
                })
                if(!user){
                    throw new Error('No user found with these credentials !!')
                    // return null;
                }else if(user){
                    return user; 
                }
            } catch (error) {
                return null;
            }
           }
           
        })
        ],
        callbacks:{
            async jwt({user,token}){
                if(user){
                    token.id = user.id;                    
                }
                return token;
            },
            async session({session,token}){
                if(session.user){
                    session.user.id = token.id as string
                }
                return session;
            },
        },
        pages:{
            signIn:'/signinAuth'
        },
        secret:process.env.NEXTAUTH_URL
}