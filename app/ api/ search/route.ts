import { NextResponse } from "next/server";
import { products } from "@/lib/data";
export async function GET(req:Request){
 const q=new URL(req.url).searchParams.get("q")?.toLowerCase().trim()||"";
 return NextResponse.json(products.filter(p=>`${p.name} ${p.category} ${p.material} ${p.color}`.toLowerCase().includes(q)).slice(0,12));
}
