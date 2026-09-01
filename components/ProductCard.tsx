"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowUpRight } from "lucide-react";
import { Product, money } from "@/lib/data";
import { useState } from "react";

export default function ProductCard({p}:{p:Product}){
 const [liked,setLiked]=useState(false);
 return <article className="group">
   <div className="relative overflow-hidden bg-[#eeeae2] aspect-[4/5]">
     <Link href={`/product/${p.slug}`} className="block h-full">
       <Image src={p.image} alt={p.name} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" />
       <Image src={p.image2} alt="" fill className="object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-[1.025]" />
     </Link>
     <button onClick={()=>setLiked(!liked)} aria-label="Wishlist" className="absolute right-4 top-4 rounded-full bg-white/80 p-2 backdrop-blur">
       <Heart size={16} fill={liked?"currentColor":"none"}/>
     </button>
     <Link href={`/product/${p.slug}`} className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 rounded-full bg-black px-4 py-2 text-[10px] tracking-[.14em] uppercase text-white">
       View <ArrowUpRight size={13} className="inline ml-1"/>
     </Link>
   </div>
   <div className="flex justify-between gap-4 pt-4">
     <div><h3 className="serif text-lg">{p.name}</h3><p className="mt-1 text-xs opacity-50">{p.material} · {p.color}</p></div>
     <span className="text-sm">{money(p.priceCents)}</span>
   </div>
 </article>
}
