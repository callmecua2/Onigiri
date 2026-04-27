import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { OrderIdreq, ForPaymentMethod, Amount, cashReceived } = body;

    if (!OrderIdreq || ForPaymentMethod || Amount) {
      return NextResponse.json(
        { message: "Can't find your order" },
        { status: 400 },
      );
    }

    const findOrder = await prisma.order.findFirst({
      where: OrderIdreq,
    });

    if (!findOrder) {
      return NextResponse.json(
        { message: "Cant find your order" },
        { status: 400 },
      );
    }

    if (ForPaymentMethod === "TUNAI") {
      if (!cashReceived) {
        return NextResponse.json(
          { message: "Masukkan jumlah nominal yang diterima" },
          { status: 400 },
        );
      }

      if (cashReceived < Amount) {
        return NextResponse.json(
          { message: "Jumlah uang tunai harus sesuai dengan total belanja" },
          { status: 400 },
        );
      }
    }

    const createPayment = await prisma.payment.create({
      data: {
        orderId: OrderIdreq,
        method: ForPaymentMethod,
        amount: Amount,
        cashReceived: ForPaymentMethod === "TUNAI" ? cashReceived : null,
        cashReturned:
          ForPaymentMethod === "TUNAI" ? cashReceived - Amount : null,
      },
    });

    return NextResponse.json(
      {
        message: "Berhasil melakukan pembayaran",
        order: findOrder,
        payment: createPayment,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const orderNumberInput = req.nextUrl.searchParams.get("orderNumber");

    if (!orderNumberInput) {
      return NextResponse.json(
        { message: "Cant find your order" },
        { status: 400 },
      );
    }

    const findOrder = await prisma.order.findFirst({
      where: { orderNumber: Number(orderNumberInput) },
      include: {
        items: true,
      },
    });

    if (!findOrder) {
      return NextResponse.json(
        { message: "Cant find your order" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Success", order: findOrder },
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