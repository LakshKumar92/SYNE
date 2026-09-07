const fs = require('fs');

const verifiedWomensImages = [
  "1490481651871-ab68de25d43d",
  "1512436991641-6745cdb1723f",
  "1515886657613-9f3515b0c78f",
  "1539109136881-3be0616acf4b",
  "1550614000-4b95d4158223",
  "1543163521-1bf539c55dd2",
  "1469334031218-e382a71b716b"
];

const verifiedMensImages = [
  "1445205170230-053b83016050",
  "1485230895905-ef41725514f7",
  "1487222477894-8943e31ef7b2",
  "1534528741775-53994a69daeb",
  "1509631179647-0c5000508c11"
];

const verifiedComponentImages = [
  "1620799140408-edc6dcb6d633", // White shirt
  "1541099649105-f69ad21f3246", // Jeans
  "1560343090-f0409e92791a", // Shoes
  "1551028719-00167b16eac5", // Leather jacket
  "1596755094514-f87e34085b2c", // Colorful shirt
  "1542272604-780c8d52a5ce", // Denim jacket/jeans
  "1542291026-7eec264c27ff", // Nike shoe
  "1591047139829-d91aecb6caea", // Knit sweater
  "1604176354204-926873812d4e", // Cargo pants
  "1595950653106-6c9ebd614d3a", // Sneakers
  "1583743814966-8936f5b7be1a", // Black t-shirt
  "1591561954557-26941169b49e", // Leather bag
  "1578587018452-892bace0353c", // Winter coat
  "1584865288642-42078afe6942", // High-waisted jeans
  "1525966222134-fcfa99b8ae77", // Vans shoes
  "1618354691373-d851c5c3a990", // Striped shirt
  "1549298916-b41d501d3772"  // Dress shoes
];

const brands = ["Saint Laurent", "Jil Sander", "Prada", "Comme des Garcons", "Rick Owens", "YEEZY", "Arcteryx", "Tom Ford", "Issey Miyake", "Balenciaga", "Maison Margiela"];
const femaleTitles = ["Draped Silk Gown", "Pleated Trench Coat", "Oversized Cashmere Sweater", "Cropped Utility Jacket", "Asymmetric Knit Top", "Bias Cut Skirt", "High-Waisted Trousers", "Sculptural Blazer", "Silk Organza Blouse", "Ribbed Knit Dress"];
const maleTitles = ["Tailored Overcoat", "Heavyweight Hoodie", "Structured Blazer", "Straight-Leg Denim", "Nylon Bomber Jacket", "Mohair Cardigan", "Cotton Poplin Shirt", "Pleated Wool Trousers", "Utility Vest", "Leather Biker Jacket"];
const accTitles = ["Chunky Leather Boots", "Minimalist Sneakers", "Structured Tote Bag", "Acetate Sunglasses", "Silver Link Necklace", "Leather Crossbody", "Suede Loafers", "Classic White Shirt", "Selvedge Denim", "Tailored Jacket"];
const stylesList = ["Avant-Garde", "Minimalist", "Streetwear", "Formal", "Casual"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const products = [];
let id = 1;

// Generate 200 Womenswear
for (let i = 0; i < 200; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(femaleTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 200) * 10 + 290,
    image: `https://images.unsplash.com/photo-${getRandom(verifiedWomensImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Womenswear"],
    bodyType: ["Slim", "Athletic", "Broad"].sort(() => 0.5 - Math.random()).slice(0, 2),
    style: [getRandom(stylesList), getRandom(stylesList)]
  });
}

// Generate 150 Menswear
for (let i = 0; i < 150; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(maleTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 200) * 10 + 290,
    image: `https://images.unsplash.com/photo-${getRandom(verifiedMensImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Menswear"],
    bodyType: ["Slim", "Athletic", "Broad"].sort(() => 0.5 - Math.random()).slice(0, 2),
    style: [getRandom(stylesList), getRandom(stylesList)]
  });
}

// Generate 150 Components/Accessories/Unisex
for (let i = 0; i < 150; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(accTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 100) * 10 + 190,
    image: `https://images.unsplash.com/photo-${getRandom(verifiedComponentImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Unisex", "Menswear", "Womenswear"].sort(() => 0.5 - Math.random()).slice(0, 2),
    bodyType: ["Slim", "Athletic", "Broad"],
    style: [getRandom(stylesList)]
  });
}

// Shuffle products
products.sort(() => Math.random() - 0.5);

// Calculate formatted price
products.forEach((p, idx) => {
  p.formattedPrice = `$${p.price.toLocaleString()}`;
  // Slightly adjust image url for unqiue caching so browser doesn't get confused (optional but helpful)
  p.image = p.image + `&_v=${idx}`;
});

const output = `export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  formattedPrice: string;
  image: string;
  url: string;
  gender: string[];
  bodyType: string[];
  style: string[];
}

export const initialProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('src/data/products.ts', output);
console.log('Generated 500 fully valid products!');
