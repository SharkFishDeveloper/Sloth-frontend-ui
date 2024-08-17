import prisma from '@/util/db'
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
    const {username,password,email} = await req.json()
    try {
        const response = await prisma.user.create({
            data:{
                name:username,
                email,
                password
            }
        })
        return NextResponse.json({ message: "Success",status:200 });
    } catch (error) {
        //@ts-ignore
        if (error.code === 'P2002') { // Unique constraint failed
            return NextResponse.json({ message: "User already exists", status: 300 });
          }
        
        return NextResponse.json({ message:error,status:400 });
    }
}
