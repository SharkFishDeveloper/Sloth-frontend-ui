import prisma from '@/util/db'
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
    const {id} = await req.json()
    try {
        const response = await prisma.user.findUnique({
            where:{
                id:id
            },
            select:{
                repositories:{
                    
                    select:{
                        name:true,
                        forks:true,
                        createdAt:true,
                    },
                    take:10
                },                
            }
        })
        return NextResponse.json({ message: response?.repositories,status:200 });
    } catch (error) {
        return NextResponse.json({ message: "Something bad happened", status: 400 });
    }
}
