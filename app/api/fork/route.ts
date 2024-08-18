import prisma from '@/util/db'
import { NODE_URL } from '@/util/nodeUrl';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
    const {userID,name} = await req.json()
    try {
        if(!userID || !name){
            return NextResponse.json({ message: "Syntax error",status:400 });
        }
        const response = await axios.post(`${NODE_URL}/fork`,{userID,name});
        return NextResponse.json({ message: response.data,status:200 });
    } catch (error) {
        console.log(error)

        return NextResponse.json({ message: error,status:400 });
    }
}
