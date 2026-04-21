import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { tableNumber, OrderItem } = body;

    if (!Array.isArray(OrderItem) || OrderItem.length < 1) {
      return NextResponse.json(
        { message: "Your cart is empty, add an items" },
        { status: 400 },
      );
    }

    if (!tableNumber || tableNumber < 1 || tableNumber > 30) {
      return NextResponse.json(
        { message: "Table number is wrong" },
        { status: 400 },
      );
    }

    const foodIds = OrderItem.map((item) => item.foodId);

    let totalPrice = 0;
    const getItems = await prisma.food.findMany({
      where: {
        id: {
          in: foodIds,
        },
      },
    });

    const itemToOrder = [];

    for (const item of OrderItem) {
      const matchedFoodId = getItems.find((food) => food.id === item.foodId);

      if (!matchedFoodId) {
        return NextResponse.json({ message: "Invalid input" }, { status: 400 });
      }

      const name = matchedFoodId?.name;
      const price = matchedFoodId?.price || 0;
      const quantity = item.quantity;
      totalPrice += quantity * price;

      itemToOrder.push({
        foodId: item.foodId,
        name,
        price,
        quantity,
      });
    }

    const createOrder = await prisma.order.create({
      data: {
        tableNumber: body.tableNumber,
        status: "Waiting",
        total: totalPrice,
        items: {
          createMany: {
            data: itemToOrder,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Success create order", order: createOrder },
      { status: 200 }
    );
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
    const GetActiveOrder = await prisma.order.findMany({
      where: {
        status: "Waiting",
      },
    });

    if (GetActiveOrder.length < 1) {
      return NextResponse.json({ message: "No Active order" }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Succes", order: GetActiveOrder },
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