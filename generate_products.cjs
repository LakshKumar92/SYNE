const fs = require('fs');

const womensImages = [
  "1492633423594-469a4c58f005", "1494326588939-505f98a287ee", "1483985988355-763728e1935b",
  "1516762689616-e1e405103c80", "1485968579580-b6d095142e6e", "1496747611176-843222e1e57c",
  "1475181128362-790100f2824e", "1485230895905-ef41725514f7", "1550614000-4b95d4158223",
  "1469334031218-e382a71b716b", "1515886657613-9f3515b0c78f", "1539109136881-3be0616acf4b",
  "1490481651871-ab68de25d43d", "1445205170230-053b83016050", "1529139574466-a303a2740a6b",
  "1502716119720-12377317c14b", "1495385794356-15371f348cea", "1485231169246-63e5e66dc034",
  "1512436991641-6745cdb1723f", "1483160271448-4e899b8f2762", "1515347619363-231a48c4146a",
  "1524041255072-7da0526d9d1a", "1485230405346-71acb9518d9c", "1503342217505-b0a15ec3261c",
  "1475178626620-27ea2a54332e"
];

const mensImages = [
  "1524504388266-1c731e0f0653", "1487222477894-8943e31ef7b2", "1509631179647-0c5000508c11",
  "1492288991661-058aa541ff43", "1516826957135-739c0d54a338", "1475403614135-5f180ed1f15c",
  "1503342394128-c104d54dba01", "1512353087810-2585f671edbb", "1484515991647-c5760fce0c78",
  "1480455624315-062e2153cb42", "1507682520764-9b456ce1312c", "1499939667732-c2cb5792da0d",
  "1520975954732-57dd998e3b7f", "1484515991647-c5760fce0c78"
];

const accessoriesImages = [
  "1542291026-7eec264c27ff", "1560343090-f0409e92791a", "1595950653106-6c9ebd614d3a",
  "1525966222134-fcfa99b8ae77", "1591561954557-26941169b49e", "1578587018452-892bace0353c",
  "1549298916-b41d501d3772", "1581392683995-177bf3bb668d", "1604176354204-926873812d4e",
  "1584865288642-42078afe6942", "1620799140408-edc6dcb6d633", "1542272604-780c8d52a5ce"
];

const brands = ["Saint Laurent", "Jil Sander", "Prada", "Comme des Garcons", "Rick Owens", "YEEZY", "Arcteryx", "Tom Ford", "Issey Miyake", "Balenciaga", "Maison Margiela"];
const femaleTitles = ["Draped Silk Gown", "Pleated Trench Coat", "Oversized Cashmere Sweater", "Cropped Utility Jacket", "Asymmetric Knit Top", "Bias Cut Skirt", "High-Waisted Trousers", "Sculptural Blazer", "Silk Organza Blouse", "Ribbed Knit Dress"];
const maleTitles = ["Tailored Overcoat", "Heavyweight Hoodie", "Structured Blazer", "Straight-Leg Denim", "Nylon Bomber Jacket", "Mohair Cardigan", "Cotton Poplin Shirt", "Pleated Wool Trousers", "Utility Vest", "Leather Biker Jacket"];
const accTitles = ["Chunky Leather Boots", "Minimalist Sneakers", "Structured Tote Bag", "Acetate Sunglasses", "Silver Link Necklace", "Leather Crossbody", "Suede Loafers"];
const stylesList = ["Avant-Garde", "Minimalist", "Streetwear", "Formal", "Casual"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const products = [];
let id = 1;

// Generate 75 Womenswear
for (let i = 0; i < 75; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(femaleTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 200) * 10 + 290,
    image: `https://images.unsplash.com/photo-${getRandom(womensImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Womenswear"],
    bodyType: ["Slim", "Athletic", "Broad"].sort(() => 0.5 - Math.random()).slice(0, 2),
    style: [getRandom(stylesList), getRandom(stylesList)]
  });
}

// Generate 45 Menswear
for (let i = 0; i < 45; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(maleTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 200) * 10 + 290,
    image: `https://images.unsplash.com/photo-${getRandom(mensImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Menswear"],
    bodyType: ["Slim", "Athletic", "Broad"].sort(() => 0.5 - Math.random()).slice(0, 2),
    style: [getRandom(stylesList), getRandom(stylesList)]
  });
}

// Generate 30 Accessories/Unisex
for (let i = 0; i < 30; i++) {
  products.push({
    id: `p${id++}`,
    title: getRandom(accTitles),
    brand: getRandom(brands),
    price: Math.floor(Math.random() * 100) * 10 + 190,
    image: `https://images.unsplash.com/photo-${getRandom(accessoriesImages)}?q=80&w=800&auto=format&fit=crop`,
    url: "#",
    gender: ["Unisex", "Menswear", "Womenswear"].sort(() => 0.5 - Math.random()).slice(0, 2),
    bodyType: ["Slim", "Athletic", "Broad"],
    style: [getRandom(stylesList)]
  });
}

// Shuffle products
products.sort(() => Math.random() - 0.5);

// Calculate formatted price
products.forEach(p => p.formattedPrice = `$${p.price.toLocaleString()}`);

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

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('src/data/products.ts', output);
console.log('Generated 150 diverse high-quality products!');
