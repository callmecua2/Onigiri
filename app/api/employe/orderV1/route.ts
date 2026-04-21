// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function GET() {
//   try {
//     const GetActiveOrder = await prisma.order.findMany({
//       where: {
//         status: "Waiting",
//       },
//     });

//     if (GetActiveOrder.length < 1) {
//       return NextResponse.json({ message: "No Active order" }, { status: 400 });
//     }

//     return NextResponse.json(
//       { message: "Succes", order: GetActiveOrder },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Internal server is error" },
//       { status: 500 },
//     );
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Internal server is error" },
//       { status: 500 },
//     );
//   }
// }