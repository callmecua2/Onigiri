import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const getMenu = await prisma.food.findMany();

    if(!getMenu) {
      return NextResponse.json(
        {message : "Internal server is error"},
        {status : 400}
      )
    }

    return NextResponse.json(
      { message: "Success", allMenu: getMenu },
      { status: 200 },
    );

    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server is error" },
      { status: 500 },
    );
  }
}
