```ts
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
  ["Bags", "bags", "Carry your signature."],
  ["Jewelry", "jewelry", "Quiet pieces. Distinct presence."],
  ["Shoes", "shoes", "Designed for every arrival."],
  ["Watches", "watches", "Time, refined."],
  ["Sunglasses", "sunglasses", "A sharper point of view."],
  ["Hats", "hats", "The final silhouette."],
  ["Wallets", "wallets", "Small leather goods, considered."],
  ["Belts", "belts", "Finish the line."],
  ["Clothing", "clothing", "Modern wardrobe essentials."],
  ["Accessories", "accessories", "The finishing touch."]
] as const;

const imageSets: Record<string, string[]> = {
  bags: [
    "/products/bag-01.svg",
    "/products/bag-02.svg",
    "/products/bag-03.svg",
    "/products/bag-04.svg",
    "/products/bag-05.svg",
    "/products/bag-06.svg",
    "/products/bag-07.svg",
    "/products/bag-08.svg",
    "/products/bag-09.svg",
    "/products/bag-10.svg"
  ],

  jewelry: [
    "/products/jewel-01.svg",
    "/products/jewel-02.svg",
    "/products/jewel-03.svg",
    "/products/jewel-04.svg",
    "/products/jewel-05.svg",
    "/products/jewel-06.svg",
    "/products/jewel-07.svg",
    "/products/jewel-08.svg",
    "/products/jewel-09.svg",
    "/products/jewel-10.svg"
  ],

  shoes: [
    "/products/shoe-01.svg",
    "/products/shoe-02.svg",
    "/products/shoe-03.svg",
    "/products/shoe-04.svg",
    "/products/shoe-05.svg",
    "/products/shoe-06.svg",
    "/products/shoe-07.svg",
    "/products/shoe-08.svg",
    "/products/shoe-09.svg",
    "/products/shoe-10.svg"
  ],

  watches: [
    "/products/watch-01.svg",
    "/products/watch-02.svg",
    "/products/watch-03.svg",
    "/products/watch-04.svg",
    "/products/watch-05.svg",
    "/products/watch-06.svg",
    "/products/watch-07.svg",
    "/products/watch-08.svg",
    "/products/watch-09.svg",
    "/products/watch-10.svg"
  ],

  sunglasses: [
    "/products/sun-01.svg",
    "/products/sun-02.svg",
    "/products/sun-03.svg",
    "/products/sun-04.svg",
    "/products/sun-05.svg",
    "/products/sun-06.svg",
    "/products/sun-07.svg",
    "/products/sun-08.svg",
    "/products/sun-09.svg",
    "/products/sun-10.svg"
  ],

  hats: [
    "/products/hat-01.svg",
    "/products/hat-02.svg",
    "/products/hat-03.svg",
    "/products/hat-04.svg",
    "/products/hat-05.svg",
    "/products/hat-06.svg",
    "/products/hat-07.svg",
    "/products/hat-08.svg",
    "/products/hat-09.svg",
    "/products/hat-10.svg"
  ],

  wallets: [
    "/products/wallet-01.svg",
    "/products/wallet-02.svg",
    "/products/wallet-03.svg",
    "/products/wallet-04.svg",
    "/products/wallet-05.svg",
    "/products/wallet-06.svg",
    "/products/wallet-07.svg",
    "/products/wallet-08.svg",
    "/products/wallet-09.svg",
    "/products/wallet-10.svg"
  ],

  belts: [
    "/products/belt-01.svg",
    "/products/belt-02.svg",
    "/products/belt-03.svg",
    "/products/belt-04.svg",
    "/products/belt-05.svg",
    "/products/belt-06.svg",
    "/products/belt-07.svg",
    "/products/belt-08.svg",
    "/products/belt-09.svg",
    "/products/belt-10.svg"
  ],

  clothing: [
    "/products/cloth-01.svg",
    "/products/cloth-02.svg",
    "/products/cloth-03.svg",
    "/products/cloth-04.svg",
    "/products/cloth-05.svg",
    "/products/cloth-06.svg",
    "/products/cloth-07.svg",
    "/products/cloth-08.svg",
    "/products/cloth-09.svg",
    "/products/cloth-10.svg"
  ],

  accessories: [
    "/products/accessory-01.svg",
    "/products/accessory-02.svg",
    "/products/accessory-03.svg",
    "/products/accessory-04.svg",
    "/products/accessory-05.svg",
    "/products/accessory-06.svg",
    "/products/accessory-07.svg",
    "/products/accessory-08.svg",
    "/products/accessory-09.svg",
    "/products/accessory-10.svg"
  ]
};

const names: Record<string, string[]> = {
  bags: [
    "Aurelia Carryall",
    "Nocturne Shoulder",
    "Vela Crossbody",
    "Serein Mini",
    "Cavaliere Tote",
    "Atelier Satchel",
    "Lune Evening",
    "Marlowe Weekender",
    "Crescent Laptop",
    "Orion Travel"
  ],

  jewelry: [
    "Élan Necklace",
    "Astra Earrings",
    "Lumière Bracelet",
    "Solis Ring",
    "Aurelia Set",
    "Noir Cuff",
    "Vela Anklet",
    "Étoile Pendant",
    "Meridian Ring",
    "Aria Chain"
  ],

  shoes: [
    "Avenue Sneaker",
    "Monarch Loafer",
    "Nocturne Boot",
    "Solis Heel",
    "Vela Sandal",
    "Atelier Flat",
    "Cavaliere Derby",
    "Lune Slide",
    "Marlowe Trainer",
    "Aster Formal"
  ],

  watches: [
    "Meridian Classic",
    "Noir Dress",
    "Aurelia Chronograph",
    "Solis Minimal",
    "Vela Automatic",
    "Atelier Gold",
    "Cavaliere Steel",
    "Lune Leather",
    "Orion Unisex",
    "Élan Chrono"
  ],

  sunglasses: [
    "Avenue Aviator",
    "Nocturne Square",
    "Serein Cat Eye",
    "Vela Oversized",
    "Aurelia Round",
    "Orion Rectangle",
    "Élan Wayfarer",
    "Lune Polarized",
    "Solis Frame",
    "Atelier Shield"
  ],

  hats: [
    "Avenue Cap",
    "Nocturne Snapback",
    "Serein Trucker",
    "Vela Bucket",
    "Aurelia Fedora",
    "Orion Wide Brim",
    "Élan Beanie",
    "Lune Fashion Hat",
    "Solis Cap",
    "Atelier Felt"
  ],

  wallets: [
    "Noir Bifold",
    "Aurelia Card Case",
    "Vela Long Wallet",
    "Serein Zip Wallet",
    "Orion Travel Wallet",
    "Atelier Trifold",
    "Lune Card Holder",
    "Marlowe Bifold",
    "Solis Long Wallet",
    "Élan Passport Case"
  ],

  belts: [
    "Noir Leather Belt",
    "Aurelia Formal",
    "Vela Casual",
    "Serein Statement",
    "Orion Reversible",
    "Atelier Leather",
    "Lune Slim",
    "Marlowe Buckle",
    "Solis Minimal",
    "Élan Signature"
  ],

  clothing: [
    "Aurelia Dress",
    "Nocturne Blazer",
    "Vela Shirt",
    "Serein Knit",
    "Orion Jacket",
    "Atelier Trouser",
    "Lune Coat",
    "Marlowe Tee",
    "Solis Hoodie",
    "Élan Skirt"
  ],

  accessories: [
    "Aurelia Scarf",
    "Noir Gloves",
    "Vela Keychain",
    "Serein Hair Clip",
    "Orion Tech Sleeve",
    "Atelier Travel Set",
    "Lune Silk Scarf",
    "Marlowe Case",
    "Solis Gift Set",
    "Élan Travel Tag"
  ]
};

const basePrice: Record<string, number> = {
  bags: 285,
  jewelry: 120,
  shoes: 195,
  watches: 340,
  sunglasses: 145,
  hats: 85,
  wallets: 110,
  belts: 95,
  clothing: 175,
  accessories: 70
};

const materials = [
  "Italian leather",
  "Brushed steel",
  "Silk blend",
  "Organic cotton",
  "Polished acetate",
  "Suede",
  "Vegan leather",
  "Sterling silver",
  "Cashmere blend",
  "Titanium"
];

const colors = [
  "Noir",
  "Ivory",
  "Espresso",
  "Champagne",
  "Midnight",
  "Sable",
  "Blush",
  "Slate",
  "Camel",
  "Forest"
];

const editions = [
  "Classic",
  "Signature",
  "Édition",
  "Studio",
  "Heritage",
  "Atelier No.",
  "Reserve",
  "Capsule",
  "Essential",
  "Limited"
];

const PRODUCTS_PER_CATEGORY = 100;

export const products: Product[] = Object.entries(names).flatMap(
  ([category, productNames]) =>
    Array.from({ length: PRODUCTS_PER_CATEGORY }, (_, index) => {
      const baseName = productNames[index % productNames.length];

      const editionNumber = Math.floor(
        index / productNames.length
      );

      const productName =
        editionNumber === 0
          ? baseName
          : `${baseName} ${
              editions[editionNumber % editions.length]
            } ${editionNumber}`;

      const images = imageSets[category];

      return {
        id: `${category}-${index + 1}`,

        name: productName,

        slug: `${category}-${productName
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}-${index + 1}`,

        sku: `AUR-${category
          .slice(0, 3)
          .toUpperCase()}-${String(index + 1).padStart(4, "0")}`,

        description: `A considered ${category.slice(
          0,
          -1
        )} silhouette designed for modern international wardrobes.`,

        priceCents:
          (basePrice[category] + index * 7) * 100,

        material:
          materials[index % materials.length],

        color:
          colors[index % colors.length],

        category,

        image:
          images[index % images.length],

        image2:
          images[(index + 1) % images.length],

        featured: index < 4,

        isNew: index < 5
      };
    })
);

export const getProduct = (slug: string) =>
  products.find(
    (product) => product.slug === slug
  );

export const money = (cents: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(cents / 100);
```
