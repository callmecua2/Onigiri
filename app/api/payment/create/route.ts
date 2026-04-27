// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function POST(req: NextRequest) {
//     try {

//         const methodPayment = await req.json()
//         const {paymentName} = methodPayment

//         if(!paymentName) {
//             return NextResponse.json(
//                 {message : "Invalid input"},
//                 {status : 400}
//             )
//         }

//         const createPaymentMethod = await prisma.paymentMethod.create({
//             data : {
//                 name : paymentName
//             }
//         })

//         return NextResponse.json(
//             {message : "Succes create new Payment Method", paymentMethod : createPaymentMethod},
//             {status : 200}
//         )

//     } catch (error) {
//         console.log(error)
//         return NextResponse.json(
//             {message : "Internal server error"},
//             {status : 500}
//         )
//     }
// }