"use client";
import Link from "next/link";
import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = ["New Arrivals","Women","Men","Bags","Jewelry","Shoes","Watches","Sunglasses","Accessories"];

export default function Header(){
  const [open,setOpen]=useState(false);
  const [search,setSearch]=useState(false);
  return <>
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/75 backdrop-blur-xl">
      <div className="container-lux flex h-16 items-center justify-between gap-6">
        <Link href="/" className="serif text-xl tracking-[.22em]">AUREVANE</Link>
        <nav className="hidden xl:flex items-center gap-5 text-[11px] tracking-[.08em] uppercase">
          {nav.map(x=><Link key={x} href={`/shop?category=${encodeURIComponent(x.toLowerCase().replace(" ","-"))}`} className="opacity-70 hover:opacity-100 transition">{x}</Link>)}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" onClick={()=>setSearch(true)}><Search size={18}/></button>
          <Link aria-label="Account" href="/account"><UserRound size={18}/></Link>
          <Link aria-label="Cart" href="/cart"><ShoppingBag size={18}/></Link>
          <button className="xl:hidden" aria-label="Menu" onClick={()=>setOpen(true)}><Menu size={20}/></button>
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[60] bg-[#11100e] text-white p-7">
      <div className="flex justify-between"><span className="serif tracking-[.22em]">AUREVANE</span><button onClick={()=>setOpen(false)}><X/></button></div>
      <div className="mt-16 grid gap-6 text-3xl serif">{nav.map(x=><Link key={x} onClick={()=>setOpen(false)} href={`/shop?category=${x.toLowerCase().replace(" ","-")}`}>{x}</Link>)}</div>
    </div>}
    {search && <div className="fixed inset-0 z-[70] bg-white/95 backdrop-blur-2xl p-8">
      <div className="container-lux">
        <div className="flex justify-between items-center"><span className="serif tracking-[.22em]">SEARCH</span><button onClick={()=>setSearch(false)}><X/></button></div>
        <input autoFocus className="mt-20 w-full border-b border-black/20 bg-transparent py-5 text-4xl outline-none serif" placeholder="Search the collection…" />
        <p className="mt-6 text-xs uppercase tracking-[.18em] opacity-50">Suggested: Bags · Jewelry · New Arrivals · Watches</p>
      </div>
    </div>}
  </>;
}
