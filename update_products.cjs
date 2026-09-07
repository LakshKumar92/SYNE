const fs = require('fs');

const shirts = [
  { img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=800&auto=format&fit=crop", name: "Classic Cotton Oxford", brand: "Acne Studios" },
  { img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop", name: "Silk Camp Collar", brand: "Our Legacy" },
  { img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop", name: "Oversized Poplin Shirt", brand: "Jil Sander" },
  { img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=800&auto=format&fit=crop", name: "Linen Button-Down", brand: "Lemaire" },
  { img: "https://images.unsplash.com/photo-1588099768531-a72d4e1985ad?q=80&w=800&auto=format&fit=crop", name: "Structured Tunic", brand: "The Row" },
  { img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop", name: "Heavyweight Flannel", brand: "A.P.C." },
  { img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=800&auto=format&fit=crop", name: "Cropped Silk Blouse", brand: "Khaite" },
  { img: "https://images.unsplash.com/photo-1550639524-a6f58345a278?q=80&w=800&auto=format&fit=crop", name: "Boxy Short Sleeve", brand: "Studio Nicholson" },
  { img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop", name: "Asymmetric Drape Shirt", brand: "Rick Owens" },
  { img: "https://images.unsplash.com/photo-1596755095811-9252973809fb?q=80&w=800&auto=format&fit=crop", name: "Band Collar Shirt", brand: "Cos" }
];

const pants = [
  { img: "https://images.unsplash.com/photo-1594633312681-425c7b64bf4a?q=80&w=800&auto=format&fit=crop", name: "Pleated Wide Leg", brand: "Issey Miyake" },
  { img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=800&auto=format&fit=crop", name: "Wool Trousers", brand: "Maison Margiela" },
  { img: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop", name: "Raw Denim Jeans", brand: "A.P.C." },
  { img: "https://images.unsplash.com/photo-1594633313593-cb082fa50b0e?q=80&w=800&auto=format&fit=crop", name: "Drawstring Linen Pant", brand: "Lemaire" },
  { img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop", name: "Cargo Fatigue Pant", brand: "Engineered Garments" },
  { img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop", name: "Tailored Chino", brand: "Officine Generale" },
  { img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop", name: "Cropped Trouser", brand: "Acne Studios" },
  { img: "https://images.unsplash.com/photo-1584323803806-7b041fea92f4?q=80&w=800&auto=format&fit=crop", name: "Silk Blend Pant", brand: "The Row" },
  { img: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=800&auto=format&fit=crop", name: "Relaxed Fit Denim", brand: "Our Legacy" },
  { img: "https://images.unsplash.com/photo-1625904835711-098b6716075e?q=80&w=800&auto=format&fit=crop", name: "Flared Wool Pant", brand: "Khaite" }
];

const shoes = [
  { img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop", name: "Leather Loafer", brand: "Gucci" },
  { img: "https://images.unsplash.com/photo-1595950653106-6eb8aca14bee?q=80&w=800&auto=format&fit=crop", name: "Minimal Sneaker", brand: "Common Projects" },
  { img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc0519?q=80&w=800&auto=format&fit=crop", name: "Chunky Derby", brand: "Prada" },
  { img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop", name: "Suede Mules", brand: "Birkenstock 1774" },
  { img: "https://images.unsplash.com/photo-1525966222134-fc6a9d7023db?q=80&w=800&auto=format&fit=crop", name: "Classic Chelsea Boot", brand: "Bottega Veneta" },
  { img: "https://images.unsplash.com/photo-1588099768531-a72d4e1985ad?q=80&w=800&auto=format&fit=crop", name: "Square Toe Boot", brand: "Balenciaga" },
  { img: "https://images.unsplash.com/photo-1590401861008-01308a0d0d17?q=80&w=800&auto=format&fit=crop", name: "Knit Runner", brand: "Rick Owens" },
  { img: "https://images.unsplash.com/photo-1610427845353-83ebc2efd02b?q=80&w=800&auto=format&fit=crop", name: "Platform Oxford", brand: "Dr. Martens x CDG" },
  { img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop", name: "Tabi Boot", brand: "Maison Margiela" },
  { img: "https://images.unsplash.com/photo-1612457490082-8bcaf4c478df?q=80&w=800&auto=format&fit=crop", name: "Slip-On Mule", brand: "Jil Sander" }
];

const bodyTypes = ['Slim', 'Athletic', 'Broad'];
const styles = ['Casual', 'Streetwear', 'Formal', 'Avant-Garde'];
const genders = ['Menswear', 'Womenswear', 'Unisex'];

let products = [];
let idCounter = 1;

function generateProduct(item, category) {
  const price = Math.floor(Math.random() * (450 - 150) + 150);
  const bodyType = [bodyTypes[Math.floor(Math.random() * 3)], "All"];
  const style = [styles[Math.floor(Math.random() * styles.length)], "All"];
  const gender = [genders[Math.floor(Math.random() * genders.length)], "All"];
  
  return {
    id: "p" + (idCounter++),
    title: item.name,
    brand: item.brand,
    price: price,
    formattedPrice: "$" + price,
    image: item.img,
    url: "#",
    category: category,
    gender: gender,
    bodyType: bodyType,
    style: style
  };
}

shirts.forEach(s => products.push(generateProduct(s, "Shirts")));
pants.forEach(p => products.push(generateProduct(p, "Pants")));
shoes.forEach(s => products.push(generateProduct(s, "Shoes")));

const content = `export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  formattedPrice: string;
  image: string;
  url: string;
  category: string;
  gender: string[];
  bodyType: string[];
  style: string[];
}

export const initialProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('src/data/products.ts', content);
console.log('Products created successfully.');
