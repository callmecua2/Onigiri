import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: NextRequest) {
    try {

    const body = await req.json();
    const {email, password, name} = body;

    if(!email || !password || !name) {
        return NextResponse.json(
            {mesage : "Invalid input"},
            {status : 401}
        )
    }
    
    const createUser = await prisma.user.create({
        data : {
            email : body.email,
            password : body.password,
            name : body.name
        }
    })





    } catch (error) {
        return NextResponse.json(
            {message : "Internal server is Error", error},
            {status : 500}
        )
    }
}