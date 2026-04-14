import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { custName, totalCust } = body;
    console.log(custName, totalCust);

    if (!custName || !totalCust || totalCust < 1) {
      return NextResponse.json(
        { message: "Missing required field" },
        { status: 400 },
      );
    }

    const createList = await prisma.waitingList.create({
      data: {
        customerName: custName,
        numberOfCustomer: totalCust,
      },
    });

    const response = NextResponse.json(
      {
        message: "Success add new waiting list",
        customer: {
          name: custName,
          totalCustomer: totalCust,
        },
      },
      { status: 200 },
    );

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const WaitingData = await prisma.waitingList.findMany();

    return NextResponse.json(
      {
        message: "Succes",
        WaitingList: WaitingData,
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

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const {WaitingId} = body;


    if (!WaitingId) {
      return NextResponse.json(
        { message: "Id is required" },
        { status: 404 },
      );
    }

    const updateStatus = await prisma.waitingList.update({
      where: { id: WaitingId },
      data: { waitingStatus: "Enter" },
    });

    return NextResponse.json(
      {
        message: "Success Change Waiting Status",
        Waitingnumber: WaitingId,
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
