import prisma from '@/util/db'
import type {  NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
    const {search} = await req.json()
    try {
        const response = await prisma.repositories.findMany({
            where: {
                name:{
                    contains:search,
                    mode:"insensitive"
                },                                
            },
            select:{
                name:true,
                createdAt:true,
                forks:true  ,
                description:true,
                creatorName:true,  
                userId:true              
            },
            take: 5
        })
        // console.log(response)
        return NextResponse.json({ message: response,status:200 });
    } catch (error) {
        console.log(error)

        return NextResponse.json({ message: error,status:400 });
    }
}
