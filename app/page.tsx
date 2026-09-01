import Link from "next/link";
import Image from "next/image";
import CategoryRail from "@/components/CategoryRail";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/data";

export default function Home(){
 const latest=products.filter(p=>p.isNew).slice(0,5);
 return <div>
  <section className="relative min-h-screen overflow-hidden bg-[#161512] text-white">
   <Image src="/hero.svg" alt="Aurevane luxury campaign" fill priority className="object-cover opacity-75"/>
   <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/20"/>
   <div className="relative container-lux min-h-screen flex items-end pb-20 md:pb-28">
    <div className="max-w-3xl"><p className="text-xs uppercase tracking-[.28em] text-white/65">Aurevane · Autumn / Winter 2026</p><h1 className="serif mt-5 text-5xl md:text-8xl leading-[.9]">The new standard of everyday luxury.</h1><p className="mt-7 max-w-xl text-sm md:text-base text-white/65">Quiet confidence, considered materials and silhouettes made for the modern international wardrobe.</p><div className="mt-9 flex gap-3"><Link href="/shop" className="bg-white px-6 py-3 text-xs uppercase tracking-[.16em] text-black">Explore collection</Link><Link href="/shop?new=true" className="border border-white/35 px-6 py-3 text-xs uppercase tracking-[.16em]">Shop new arrivals</Link></div></div>
   </div>
  </section>

  <section className="container-lux py-24"><Reveal><p className="text-xs uppercase tracking-[.18em] opacity-45">Discover</p><h2 className="serif mt-3 text-4xl md:text-6xl">Find your signature.</h2></Reveal><div className="mt-10"><CategoryRail/></div></section>

  <section className="bg-[#f1eee7] py-24"><div className="container-lux"><Reveal><p className="text-xs uppercase tracking-[.18em] opacity-45">The latest</p><div className="flex justify-between items-end gap-5"><h2 className="serif mt-3 text-4xl md:text-6xl">Just arrived.</h2><Link href="/shop" className="text-xs uppercase tracking-[.15em] underline underline-offset-8">View all</Link></div></Reveal><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">{latest.slice(0,4).map(p=><ProductCard key={p.id} p={p}/>)}</div></div></section>

  <section className="bg-[#11100e] text-white"><div className="container-lux grid lg:grid-cols-2 min-h-[720px] items-center gap-14 py-24"><Reveal><div><p className="text-xs uppercase tracking-[.2em] text-white/45">The Aurelia collection</p><h2 className="serif mt-5 text-5xl md:text-7xl leading-[.95]">Carry your signature.</h2><p className="mt-7 max-w-md text-white/55">Sculpted leather, quiet hardware and a silhouette designed to become part of your story.</p><Link href="/shop?category=bags" className="inline-block mt-8 border border-white/25 px-6 py-3 text-xs uppercase tracking-[.16em]">Explore bags</Link></div></Reveal><div className="relative h-[520px]"><Image src="/products/bag-01.svg" alt="Aurelia bag" fill className="object-contain"/></div></div></section>

  <section className="container-lux py-24"><Reveal><p className="text-xs uppercase tracking-[.18em] opacity-45">The finishing touch</p><h2 className="serif mt-3 text-4xl md:text-6xl">Complete the look.</h2></Reveal><div className="mt-12 grid md:grid-cols-3 gap-5">{products.filter(p=>p.featured).slice(0,3).map(p=><ProductCard key={p.id} p={p}/>)}</div></section>

  <section className="border-y border-black/10 py-24"><div className="container-lux grid md:grid-cols-2 gap-16 items-center"><div><p className="text-xs uppercase tracking-[.18em] opacity-45">Your style, our expertise</p><h2 className="serif mt-4 text-5xl md:text-6xl">A little guidance, when you want it.</h2></div><div className="grid gap-4">{["Personal shopping assistance","Size & product consultation","Gift assistance","Order support"].map(x=><div key={x} className="border-t border-black/10 py-5 flex justify-between"><span className="serif text-xl">{x}</span><span>↗</span></div>)}</div></div></section>

  <section className="container-lux py-24"><div className="bg-[#eeeae2] p-10 md:p-16 text-center"><p className="text-xs uppercase tracking-[.18em] opacity-45">Join our world</p><h2 className="serif mt-4 text-4xl md:text-6xl">Refined style, delivered.</h2><p className="mt-5 text-sm opacity-55">Sign up for new collections, editorial stories and private launches.</p><div className="mx-auto mt-8 flex max-w-lg border-b border-black/20"><input className="flex-1 bg-transparent py-3 outline-none text-sm" placeholder="Email address"/><button className="text-xs uppercase tracking-[.16em]">Join ↗</button></div></div></section>
 </div>
}
