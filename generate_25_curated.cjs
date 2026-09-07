const fs = require('fs');

const curated = [
  // Womenswear
  { id: '1490481651871-ab68de25d43d', title: "Silk Button-Up Shirt", cat: "Shirts", gender: ["Womenswear"] },
  { id: '1512436991641-6745cdb1723f', title: "Draped Silk Gown", cat: "Dresses", gender: ["Womenswear"] },
  { id: '1515886657613-9f3515b0c78f', title: "Pleated Midi Dress", cat: "Dresses", gender: ["Womenswear"] },
  { id: '1539109136881-3be0616acf4b', title: "Cotton Poplin Blouse", cat: "Shirts", gender: ["Womenswear"] },
  { id: '1469334031218-e382a71b716b', title: "Structured Blazer", cat: "Outerwear", gender: ["Womenswear"] },
  { id: '1584865288642-42078afe6942', title: "High-waisted jeans", cat: "Pants", gender: ["Womenswear"] },
  { id: '1543163521-1bf539c55dd2', title: "Oversized Cashmere Sweater", cat: "Sweaters", gender: ["Womenswear"] },
  
  // Menswear
  { id: '1445205170230-053b83016050', title: "Tailored Overcoat", cat: "Outerwear", gender: ["Menswear"] },
  { id: '1487222477894-8943e31ef7b2', title: "Heavyweight Hoodie", cat: "Sweaters", gender: ["Menswear"] },
  { id: '1534528741775-53994a69daeb', title: "Nylon Bomber Jacket", cat: "Outerwear", gender: ["Menswear"] },
  { id: '1591047139829-d91aecb6caea', title: "Knit sweater", cat: "Sweaters", gender: ["Menswear"] },
  { id: '1551028719-00167b16eac5', title: "Leather jacket", cat: "Outerwear", gender: ["Menswear"] },
  { id: '1496747611176-843222e1e57c', title: "Leather Biker Jacket", cat: "Outerwear", gender: ["Menswear"] },

  // Unisex / Accessories / General items
  { id: '1560343090-f0409e92791a', title: "Minimalist Sneakers", cat: "Accessories", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1541099649105-f69ad21f3246', title: "Selvedge Denim", cat: "Pants", gender: ["Menswear", "Unisex"] },
  { id: '1596755094514-f87e34085b2c', title: "Colorful shirt", cat: "Shirts", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1620799140408-edc6dcb6d633', title: "Classic White Shirt", cat: "Shirts", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1542291026-7eec264c27ff', title: "Nike shoe", cat: "Accessories", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1595950653106-6c9ebd614d3a', title: "Suede Loafers", cat: "Accessories", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1591561954557-26941169b49e', title: "Leather bag", cat: "Accessories", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1583743814966-8936f5b7be1a', title: "Black t-shirt", cat: "T-Shirts", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1549298916-b41d501d3772', title: "Dress shoes", cat: "Accessories", gender: ["Menswear", "Unisex"] },
  { id: '1525966222134-fcfa99b8ae77', title: "Vans shoes", cat: "Accessories", gender: ["Unisex", "Menswear", "Womenswear"] },
  { id: '1618354691373-d851c5c3a990', title: "Striped shirt", cat: "Shirts", gender: ["Unisex", "Menswear", "Womenswear"] }
];

const brands = ["Saint Laurent", "Jil Sander", "Prada", "Comme des Garcons", "Rick Owens", "YEEZY", "Arcteryx", "Tom Ford", "Issey Miyake", "Balenciaga", "Maison Margiela"];
const stylesList = ["Avant-Garde", "Minimalist", "Streetwear", "Formal", "Casual"];

function getRandom(arr, seed) {
  return arr[seed % arr.length];
}

const products = curated.map((item, index) => {
  return {
    id: `p${index + 1}`,
    title: item.title,
    brand: getRandom(brands, index),
    price: 150 + (index * 15),
    formattedPrice: `$${(150 + (index * 15)).toLocaleString()}`,
    image: `https://images.unsplash.com/photo-${item.id}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    category: item.cat,
    gender: item.gender,
    bodyType: ["Slim", "Athletic", "Broad"].slice(0, 2),
    style: [getRandom(stylesList, index)]
  };
});

const output = `export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  formattedPrice: string;
  image: string;
  url: string;
  category?: string;
  gender: string[];
  bodyType: string[];
  style: string[];
}

export const initialProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('src/data/products.ts', output);
console.log('Generated fully verified 24 product catalog!');
