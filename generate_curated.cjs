const fs = require('fs');

const brands = ["Saint Laurent", "Jil Sander", "Prada", "Comme des Garcons", "Rick Owens", "YEEZY", "Arcteryx", "Tom Ford", "Issey Miyake", "Balenciaga", "Maison Margiela"];
const stylesList = ["Avant-Garde", "Minimalist", "Streetwear", "Formal", "Casual"];

function getRandom(arr, seed) {
  return arr[seed % arr.length];
}

const products = [];
let id = 1;

const curatedWomens = [
  { title: "Draped Silk Gown", cat: "Dresses" },
  { title: "Pleated Midi Dress", cat: "Dresses" },
  { title: "Ribbed Knit Dress", cat: "Dresses" },
  { title: "Slip Dress", cat: "Dresses" },
  { title: "Cotton Poplin Blouse", cat: "Shirts" },
  { title: "Silk Button-Up Shirt", cat: "Shirts" },
  { title: "Oversized Cashmere Sweater", cat: "Sweaters" },
  { title: "Asymmetric Knit Top", cat: "Sweaters" },
  { title: "High-Waisted Trousers", cat: "Pants" },
  { title: "Wide-Leg Wool Pants", cat: "Pants" },
  { title: "Pleated Trench Coat", cat: "Outerwear" },
  { title: "Cropped Utility Jacket", cat: "Outerwear" },
  { title: "Sculptural Blazer", cat: "Outerwear" },
  { title: "Essential Basic Tee", cat: "T-Shirts" },
  { title: "Ribbed T-Shirt", cat: "T-Shirts" }
];

const curatedMens = [
  { title: "Tailored Overcoat", cat: "Outerwear" },
  { title: "Nylon Bomber Jacket", cat: "Outerwear" },
  { title: "Leather Biker Jacket", cat: "Outerwear" },
  { title: "Structured Blazer", cat: "Outerwear" },
  { title: "Heavyweight Hoodie", cat: "Sweaters" },
  { title: "Mohair Cardigan", cat: "Sweaters" },
  { title: "Chunky Knit Sweater", cat: "Sweaters" },
  { title: "Straight-Leg Denim", cat: "Pants" },
  { title: "Pleated Wool Trousers", cat: "Pants" },
  { title: "Cargo Pants", cat: "Pants" },
  { title: "Flannel Overshirt", cat: "Shirts" },
  { title: "Striped Oxford Shirt", cat: "Shirts" },
  { title: "Short Sleeve Resort Shirt", cat: "Shirts" },
  { title: "Graphic T-Shirt", cat: "T-Shirts" },
  { title: "Boxy Fit Tee", cat: "T-Shirts" }
];

const curatedAccessories = [
  { title: "Chunky Leather Boots", cat: "Accessories" },
  { title: "Minimalist Sneakers", cat: "Accessories" },
  { title: "Suede Loafers", cat: "Accessories" },
  { title: "Structured Tote Bag", cat: "Accessories" },
  { title: "Leather Crossbody", cat: "Accessories" },
  { title: "Acetate Sunglasses", cat: "Accessories" },
  { title: "Silver Link Necklace", cat: "Accessories" }
];

curatedWomens.forEach(item => {
  const prompt = encodeURIComponent(`high fashion editorial photography, female model wearing ${item.title}, minimalist studio background, full body shot`);
  products.push({
    id: `p${id}`,
    title: item.title,
    brand: getRandom(brands, id),
    price: 150 + (id * 15),
    image: `https://image.pollinations.ai/prompt/${prompt}?width=800&height=1000&nologo=true&seed=${id}`,
    url: "#",
    category: item.cat,
    gender: ["Womenswear"],
    bodyType: ["Slim", "Athletic"],
    style: [getRandom(stylesList, id)]
  });
  id++;
});

curatedMens.forEach(item => {
  const prompt = encodeURIComponent(`high fashion editorial photography, male model wearing ${item.title}, minimalist studio background, full body shot`);
  products.push({
    id: `p${id}`,
    title: item.title,
    brand: getRandom(brands, id),
    price: 150 + (id * 15),
    image: `https://image.pollinations.ai/prompt/${prompt}?width=800&height=1000&nologo=true&seed=${id}`,
    url: "#",
    category: item.cat,
    gender: ["Menswear"],
    bodyType: ["Athletic", "Broad"],
    style: [getRandom(stylesList, id)]
  });
  id++;
});

curatedAccessories.forEach(item => {
  const prompt = encodeURIComponent(`high fashion product photography, ${item.title}, minimalist studio background`);
  products.push({
    id: `p${id}`,
    title: item.title,
    brand: getRandom(brands, id),
    price: 90 + (id * 10),
    image: `https://image.pollinations.ai/prompt/${prompt}?width=800&height=1000&nologo=true&seed=${id}`,
    url: "#",
    category: item.cat,
    gender: ["Unisex", "Menswear", "Womenswear"],
    bodyType: ["Slim", "Athletic", "Broad"],
    style: [getRandom(stylesList, id)]
  });
  id++;
});

// Calculate formatted price
products.forEach(p => {
  p.formattedPrice = `$${p.price.toLocaleString()}`;
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
console.log('Generated fully curated and mapped products!');
