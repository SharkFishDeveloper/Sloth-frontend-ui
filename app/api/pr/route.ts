import prisma from '@/util/db'
import type {  NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
    const {creatorName,name} = await req.json()
    try {
        const response = await prisma.repositories.findMany({
            where: {
               name,
               creatorName                             
            },
            select:{
                pullRequest:{
                    select:{
                        id:true,
                        parentBranch:true,
                        childBranch:true,
                        totalCommits:true,
                        createdAt:true,
                        message:true,
                        contributor:true
                    },
                    take:15
                },               
            }

        })
        return NextResponse.json({ message: response,status:200 });
    } catch (error) {
        console.log(error)

        return NextResponse.json({ message: error,status:400 });
    }
}
