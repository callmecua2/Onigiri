import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const getMenu = await prisma.food.findMany();

    return NextResponse.json(
      { message: "Internal server error", allMenu: getMenu },
      { status: 400 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server is error" },
      { status: 500 },
    );
  }
}
