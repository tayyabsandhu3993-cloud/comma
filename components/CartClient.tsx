"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, money } from "@/lib/data";

export default function CartClient(){
 const [items,setItems]=useState([{id:"bags-1",qty:1},{id:"watches-1",qty:1}]);
 const rows=useMemo(()=>items.map(i=>({ ...i,p:products.find(p=>p.id===i.id)!})),[items]);
 const total=rows.reduce((s,r)=>s+r.p.priceCents*r.qty,0);
 return <div className="container-lux py-32">
   <div className="flex items-end justify-between border-b border-black/10 pb-8"><div><p className="text-xs uppercase tracking-[.18em] opacity-50">Your selection</p><h1 className="serif mt-3 text-5xl">Cart</h1></div><span className="text-sm">{items.length} items</span></div>
   <div className="grid lg:grid-cols-[1fr_360px] gap-14 mt-10">
    <div className="divide-y divide-black/10">{rows.map(r=><div key={r.id} className="flex gap-5 py-6"><div className="relative h-32 w-28 bg-[#eeeae2]"><Image src={r.p.image} alt={r.p.name} fill className="object-cover"/></div><div className="flex-1"><h2 className="serif text-xl">{r.p.name}</h2><p className="text-xs opacity-50 mt-1">{r.p.color} · {r.p.material}</p><div className="mt-7 flex gap-4 text-xs"><button onClick={()=>setItems(items.map(x=>x.id===r.id?{...x,qty:Math.max(1,x.qty-1)}:x))}>−</button><span>{r.qty}</span><button onClick={()=>setItems(items.map(x=>x.id===r.id?{...x,qty:x.qty+1}:x))}>+</button><button className="ml-4 underline" onClick={()=>setItems(items.filter(x=>x.id!==r.id))}>Remove</button></div></div><div>{money(r.p.priceCents*r.qty)}</div></div>)}</div>
    <aside className="bg-[#f3efe8] p-7 h-fit"><p className="text-xs uppercase tracking-[.18em] opacity-50">Summary</p><div className="flex justify-between mt-7"><span>Subtotal</span><b>{money(total)}</b></div><p className="mt-3 text-xs opacity-50">Shipping calculated at checkout. No discount codes.</p><Link href="/checkout" className="mt-8 block bg-black py-4 text-center text-xs tracking-[.16em] uppercase text-white">Continue to checkout</Link></aside>
   </div>
 </div>
}
