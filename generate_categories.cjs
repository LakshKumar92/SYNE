const fs = require('fs');

const knownUnsplash = [
  "1490481651871-ab68de25d43d", "1512436991641-6745cdb1723f", "1515886657613-9f3515b0c78f",
  "1539109136881-3be0616acf4b", "1550614000-4b95d4158223", "1543163521-1bf539c55dd2",
  "1469334031218-e382a71b716b", "1445205170230-053b83016050", "1485230895905-ef41725514f7",
  "1487222477894-8943e31ef7b2", "1534528741775-53994a69daeb", "1509631179647-0c5000508c11",
  "1620799140408-edc6dcb6d633", "1541099649105-f69ad21f3246", "1560343090-f0409e92791a",
  "1551028719-00167b16eac5", "1596755094514-f87e34085b2c", "1542272604-780c8d52a5ce",
  "1542291026-7eec264c27ff", "1591047139829-d91aecb6caea", "1604176354204-926873812d4e",
  "1595950653106-6c9ebd614d3a", "1583743814966-8936f5b7be1a", "1591561954557-26941169b49e",
  "1578587018452-892bace0353c", "1584865288642-42078afe6942", "1525966222134-fcfa99b8ae77",
  "1618354691373-d851c5c3a990", "1549298916-b41d501d3772"
];

const brands = ["Saint Laurent", "Jil Sander", "Prada", "Comme des Garcons", "Rick Owens", "YEEZY", "Arcteryx", "Tom Ford", "Issey Miyake", "Balenciaga", "Maison Margiela"];
const stylesList = ["Avant-Garde", "Minimalist", "Streetwear", "Formal", "Casual"];

const categories = [
  { name: 'T-Shirts', keywords: 'tshirt,clothing', titles: ["Graphic T-Shirt", "Oversized Cotton Tee", "Vintage Wash T-Shirt", "Boxy Fit Tee", "Ribbed T-Shirt", "Essential Basic Tee"] },
  { name: 'Shirts', keywords: 'shirt,clothing', titles: ["Cotton Poplin Shirt", "Silk Button-Up", "Flannel Overshirt", "Striped Oxford Shirt", "Denim Shirt", "Short Sleeve Resort Shirt"] },
  { name: 'Pants', keywords: 'pants,trousers', titles: ["Wide-Leg Trousers", "Pleated Wool Pants", "Cargo Pants", "Tailored Chinos", "Straight-Leg Denim", "High-Waisted Trousers"] },
  { name: 'Dresses', keywords: 'dress,fashion', titles: ["Draped Silk Gown", "Ribbed Knit Dress", "Slip Dress", "Pleated Midi Dress", "Asymmetric Dress", "Cotton Maxi Dress"] },
  { name: 'Outerwear', keywords: 'jacket,coat', titles: ["Pleated Trench Coat", "Cropped Utility Jacket", "Sculptural Blazer", "Leather Biker Jacket", "Nylon Bomber Jacket", "Tailored Overcoat"] },
  { name: 'Sweaters', keywords: 'sweater,knitwear', titles: ["Oversized Cashmere Sweater", "Mohair Cardigan", "Asymmetric Knit Top", "Chunky Knit Sweater", "Turtleneck Sweater"] },
  { name: 'Accessories', keywords: 'accessories,bag,shoes', titles: ["Chunky Leather Boots", "Minimalist Sneakers", "Structured Tote Bag", "Acetate Sunglasses", "Leather Crossbody", "Suede Loafers"] }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const products = [];
let id = 1;

for (let i = 0; i < 500; i++) {
  const isFemale = Math.random() > 0.4; // 60% female representation
  const category = getRandom(categories);
  const title = getRandom(category.titles);
  
  let imageUrl = '';
  // Use known unsplash images for the first 29 items (so the first page loads instantly with ultra high quality)
  if (i < knownUnsplash.length) {
    imageUrl = `https://images.unsplash.com/photo-${knownUnsplash[i]}?q=80&w=800&auto=format&fit=crop`;
  } else {
    // Unique loremflickr image using lock ID and category keywords
    const genderKeyword = isFemale ? 'woman,model' : 'man,model';
    imageUrl = `https://loremflickr.com/800/1000/${category.keywords},${genderKeyword}/all?lock=${id}`;
  }

  products.push({
    id: `p${id++}`,
    title: title,
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 200) * 10 + 90,
    image: imageUrl,
    url: "#",
    category: category.name, // adding explicit category
    gender: isFemale ? ["Womenswear"] : ["Menswear"],
    bodyType: ["Slim", "Athletic", "Broad"].sort(() => 0.5 - Math.random()).slice(0, 2),
    style: [getRandom(stylesList), getRandom(stylesList)]
  });
}

// Calculate formatted price
products.forEach((p, idx) => {
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
console.log('Generated 500 categorized diverse products!');
