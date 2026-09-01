import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default async function Shop({searchParams}:{searchParams:Promise<Record<string,string|undefined>>}){
 const sp=await searchParams; const category=sp.category;
 const filtered=category?products.filter(p=>p.category===category):products;
 return <div className="container-lux py-32">
   <div className="border-b border-black/10 pb-10"><p className="text-xs uppercase tracking-[.18em] opacity-45">Aurevane collection</p><h1 className="serif mt-3 text-5xl md:text-7xl">{category?category.replace("-"," "):"Shop all"}</h1><p className="mt-5 max-w-xl text-sm opacity-55">Curated silhouettes across bags, jewelry, shoes, watches and accessories.</p></div>
   <div className="flex gap-3 overflow-x-auto no-scrollbar py-6 border-b border-black/10 text-xs uppercase tracking-[.12em]">{["all","bags","jewelry","shoes","watches","sunglasses","hats","wallets","belts","clothing","accessories"].map(x=><a key={x} href={x==="all"?"/shop":`/shop?category=${x}`} className="whitespace-nowrap rounded-full border border-black/10 px-4 py-2 hover:bg-black hover:text-white transition">{x}</a>)}</div>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 mt-10">{filtered.map(p=><ProductCard key={p.id} p={p}/>)}</div>
 </div>
}
