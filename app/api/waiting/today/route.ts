import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    
    try {

        const today = new Date();
        today.setHours(0,0,0,0)

        const getWaitingList = await prisma.waitingList.findMany({
            where : {
                createdAt : {
                    gte : today
                }
            },
            orderBy : {
                waitingNumber : 'asc'
            }
        })

        if(getWaitingList.length === 0) {
            return NextResponse.json(
                {message : "Empty waiting list"},
                {status : 401}
            )
        }
        
        return NextResponse.json(
            {
                message : "Success finding today waiting list",
                WaitingList : getWaitingList

            },
            {status : 200}
        )


    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {message : "Internal system error"},
            {status : 500}
        )
    }
}
