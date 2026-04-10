import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateToken } from "@/lib/generateToken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if(!username || !password) {
        return NextResponse.json(
            {message : "Invalid input"},
            {status : 400}
        )
    }

    const validateUser = await prisma.user.findFirst({ where: username });

    if (!validateUser) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    if (password != validateUser.password) {
      return NextResponse.json(
        { message: "Wrong Password, try again" },
        { status: 401 },
      );
    }

    const token = generateToken({
      id: validateUser.id,
      name: validateUser.name,
    });

    const response = NextResponse.json(
      {
        message: "Login Success",
        user: {
          name: validateUser.name,
        },
      },
      {
        status: 200,
      },
    );

    return response.cookies.set("login_auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });


  } catch (error) {
    return NextResponse.json(
        {message : "Internernal server error", error},
        {status : 500}
    )
  }
}
