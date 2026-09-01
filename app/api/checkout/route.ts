import { NextResponse } from "next/server";
import { z } from "zod";

const schema=z.object({
 email:z.string().email(),
 paymentMethod:z.enum(["paypal","venmo","zelle","invoice"]),
 items:z.array(z.object({productId:z.string(),quantity:z.number().int().positive()})).min(1)
});

export async function POST(req:Request){
 const body=await req.json();
 const parsed=schema.safeParse(body);
 if(!parsed.success) return NextResponse.json({error:"Invalid checkout payload"},{status:400});
 // Production hook: create a pending Order in Prisma, then create the official PayPal order
 // or Zelle/Invoice workflow server-side. Never trust prices sent by the browser.
 return NextResponse.json({ok:true,next:"PAYMENT_PROVIDER_REQUIRED",paymentMethod:parsed.data.paymentMethod});
}
