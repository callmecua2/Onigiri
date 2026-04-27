import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const GetOrderProcess = await prisma.order.findMany({
      where: { status: "Waiting" },
      include: {
        items: true,
      },
      orderBy : {
        createdAt : "asc"
      }
    });

    if (GetOrderProcess.length === 0) {
      return NextResponse.json(
        { message: "No On-Process Order" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        message: "Success",
        ListOrder: GetOrderProcess,
      },
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

export async function PATCH(req: NextRequest, context : {params: {id : string}}) {
  try {
    // const body = await req.nextUrl.searchParams.get("status")
    const body = await req.json()
    const {  OrderStatus } = body
    const orderId = context.params.id;
    
    if (!orderId) {
      return NextResponse.json(
        { message: "Can't find your Order" },
        { status: 400 },
      );
    }

    const updateStatus = await prisma.order.update({
      where: { id: orderId },
      data: {
        status: OrderStatus,
      },
    });

    if (!updateStatus) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}