export type Product = {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  priceCents: number;
  material: string;
  color: string;
  category: string;
  image: string;
  image2: string;
  featured?: boolean;
  isNew?: boolean;
};

export const categories = [
  ["Bags","bags","Carry your signature."],
  ["Jewelry","jewelry","Quiet pieces. Distinct presence."],
  ["Shoes","shoes","Designed for every arrival."],
  ["Watches","watches","Time, refined."],
  ["Sunglasses","sunglasses","A sharper point of view."],
  ["Hats","hats","The final silhouette."],
  ["Wallets","wallets","Small leather goods, considered."],
  ["Belts","belts","Finish the line."],
  ["Clothing","clothing","Modern wardrobe essentials."],
  ["Accessories","accessories","The finishing touch."]
] as const;

/*
 * Real photography from Pexels.
 * The URLs below are direct Pexels image CDN URLs.
 * Replace/extend these pairs with additional licensed photos whenever you
 * want more unique photography per SKU.
 */
const imageSets: Record<string, [string,string]> = {
  bags: [
    "https://images.pexels.com/photos/23223837/pexels-photo-23223837.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5717972/pexels-photo-5717972.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  jewelry: [
    "https://images.pexels.com/photos/7541802/pexels-photo-7541802.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8100368/pexels-photo-8100368.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  shoes: [
    "https://images.pexels.com/photos/11911858/pexels-photo-11911858.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/15129894/pexels-photo-15129894.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  watches: [
    "https://images.pexels.com/photos/22032446/pexels-photo-22032446.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/17351227/pexels-photo-17351227.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  sunglasses: [
    "https://images.pexels.com/photos/16667086/pexels-photo-16667086.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/10837793/pexels-photo-10837793.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  hats: [
    "https://images.pexels.com/photos/17068555/pexels-photo-17068555.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/17581003/pexels-photo-17581003.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  wallets: [
    "https://images.pexels.com/photos/27467423/pexels-photo-27467423.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/30750480/pexels-photo-30750480.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  belts: [
    "https://images.pexels.com/photos/35322159/pexels-photo-35322159.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/31367060/pexels-photo-31367060.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  clothing: [
    "https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12324553/pexels-photo-12324553.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  accessories: [
    "https://images.pexels.com/photos/33806932/pexels-photo-33806932.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8100368/pexels-photo-8100368.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ]
};

const names: Record<string,string[]> = {
  bags:["Aurelia Carryall","Nocturne Shoulder","Vela Crossbody","Serein Mini","Cavaliere Tote","Atelier Satchel","Lune Evening","Marlowe Weekender","Crescent Laptop","Orion Travel"],
  jewelry:["Élan Necklace","Astra Earrings","Lumière Bracelet","Solis Ring","Aurelia Set","Noir Cuff","Vela Anklet","Étoile Pendant","Meridian Ring","Aria Chain"],
  shoes:["Avenue Sneaker","Monarch Loafer","Nocturne Boot","Solis Heel","Vela Sandal","Atelier Flat","Cavaliere Derby","Lune Slide","Marlowe Trainer","Aster Formal"],
  watches:["Meridian Classic","Noir Dress","Aurelia Chronograph","Solis Minimal","Vela Automatic","Atelier Gold","Cavaliere Steel","Lune Leather","Orion Unisex","Élan Chrono"],
  sunglasses:["Avenue Aviator","Nocturne Square","Serein Cat Eye","Vela Oversized","Aurelia Round","Orion Rectangle","Élan Wayfarer","Lune Polarized","Solis Frame","Atelier Shield"],
  hats:["Avenue Cap","Nocturne Snapback","Serein Trucker","Vela Bucket","Aurelia Fedora","Orion Wide Brim","Élan Beanie","Lune Fashion Hat","Solis Cap","Atelier Felt"],
  wallets:["Noir Bifold","Aurelia Card Case","Vela Long Wallet","Serein Zip Wallet","Orion Travel Wallet","Atelier Trifold","Lune Card Holder","Marlowe Bifold","Solis Long Wallet","Élan Passport Case"],
  belts:["Noir Leather Belt","Aurelia Formal","Vela Casual","Serein Statement","Orion Reversible","Atelier Leather","Lune Slim","Marlowe Buckle","Solis Minimal","Élan Signature"],
  clothing:["Aurelia Dress","Nocturne Blazer","Vela Shirt","Serein Knit","Orion Jacket","Atelier Trouser","Lune Coat","Marlowe Tee","Solis Hoodie","Élan Skirt"],
  accessories:["Aurelia Scarf","Noir Gloves","Vela Keychain","Serein Hair Clip","Orion Tech Sleeve","Atelier Travel Set","Lune Silk Scarf","Marlowe Case","Solis Gift Set","Élan Travel Tag"]
};

const basePrice: Record<string,number> = {
  bags:285,jewelry:120,shoes:195,watches:340,sunglasses:145,
  hats:85,wallets:110,belts:95,clothing:175,accessories:70
};

export const products: Product[] = Object.entries(names).flatMap(([cat, arr]) =>
  arr.map((name, i) => ({
    id: `${cat}-${i+1}`,
    name,
    slug: `${cat}-${name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"")}`,
    sku: `AUR-${cat.slice(0,3).toUpperCase()}-${String(i+1).padStart(3,"0")}`,
    description: `A considered ${cat.slice(0,-1)} silhouette designed for modern international wardrobes.`,
    priceCents: (basePrice[cat] + i * 27) * 100,
    material: ["Italian leather","Brushed steel","Silk blend","Organic cotton","Polished acetate"][i % 5],
    color: ["Noir","Ivory","Espresso","Champagne","Midnight"][i % 5],
    category: cat,
    image: imageSets[cat][0],
    image2: imageSets[cat][1],
    featured: i < 4,
    isNew: i < 5
  }))
);

export const getProduct = (slug: string) => products.find(p => p.slug === slug);

export const money = (cents: number) =>
  new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(cents/100);
