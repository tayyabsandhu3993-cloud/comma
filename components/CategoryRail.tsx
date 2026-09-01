import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
const imgs=["/products/bag-01.svg","/products/jewelry-01.svg","/products/shoes-01.svg","/products/watch-01.svg","/products/sunglasses-01.svg","/products/hat-01.svg","/products/wallet-01.svg","/products/belt-01.svg","/products/clothing-01.svg","/products/accessory-01.svg"];
export default function CategoryRail(){
 return <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3">
   {categories.map(([name,slug,desc],i)=><Link key={slug} href={`/shop?category=${slug}`} className="group min-w-[220px] md:min-w-[260px]">
    <div className="relative aspect-[4/5] overflow-hidden bg-[#ece8e0]"><Image src={imgs[i]} alt={name} fill className="object-cover transition duration-700 group-hover:scale-[1.03]"/></div>
    <div className="flex items-end justify-between pt-4"><div><h3 className="serif text-2xl">{name}</h3><p className="mt-1 text-xs opacity-50">{desc}</p></div><span className="text-xl">↗</span></div>
   </Link>)}
 </div>
}
