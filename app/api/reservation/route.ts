import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, numberPerson } = body;

    if (!name || !phone || !numberPerson) {
      return NextResponse.json(
        { message: "Field is missing" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { message: "Reservation successfull" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
