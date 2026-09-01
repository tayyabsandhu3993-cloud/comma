import { PrismaClient } from "@prisma/client";
const db=new PrismaClient();
const cats=["Bags","Jewelry","Shoes","Watches","Sunglasses","Hats","Wallets","Belts","Clothing","Accessories"];
async function main(){
 for(const name of cats){
  const slug=name.toLowerCase();
  await db.category.upsert({where:{slug},update:{},create:{name,slug,description:`${name} by Aurevane.`}});
 }
 console.log("Seeded categories. Product demo catalog is available in lib/data.ts for UI development; migrate it into Product rows when connecting Prisma.");
}
main().finally(()=>db.$disconnect());
