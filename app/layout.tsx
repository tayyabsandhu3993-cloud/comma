import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
 title: "Aurevane — Modern Luxury",
 description: "Aurevane is a modern international luxury fashion house.",
 openGraph: { title:"Aurevane — Modern Luxury", description:"A considered world of modern luxury." }
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Header/><main>{children}</main><footer className="bg-[#11100e] text-white mt-24"><div className="container-lux py-16 grid md:grid-cols-4 gap-12"><div className="md:col-span-2"><div className="serif tracking-[.25em] text-xl">AUREVANE</div><p className="mt-5 max-w-md text-sm text-white/55">A considered world of modern luxury — designed for the international wardrobe.</p></div><div><p className="text-xs uppercase tracking-[.18em] text-white/40">Shop</p><div className="mt-5 grid gap-3 text-sm">{["New Arrivals","Women","Men","Bags","Jewelry","Shoes"].map(x=><Link key={x} href="/shop">{x}</Link>)}</div></div><div><p className="text-xs uppercase tracking-[.18em] text-white/40">Help</p><div className="mt-5 grid gap-3 text-sm"><Link href="/about">Contact</Link><Link href="/about">FAQ</Link><Link href="/about">Shipping & Returns</Link><Link href="/account">Order Tracking</Link></div></div></div><div className="container-lux border-t border-white/10 py-6 text-xs text-white/40 flex justify-between"><span>© 2026 Aurevane</span><span>USD · Worldwide</span></div></footer></body></html>
}
