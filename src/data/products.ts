import { ImageMappingService, Gender, Category, BodyType } from '../services/ImageMappingService';

export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  formattedPrice: string;
  category: Category;
  gender: Gender[];
  bodyType: BodyType[];
  style: string[];
  image: string;
  url: string;
}

const BRANDS = ['Acne Studios', 'Jil Sander', 'Lemaire', 'The Row', 'Bottega Veneta', 'Our Legacy', 'Maison Margiela', 'Issey Miyake', 'Dries Van Noten', 'Loewe'];
const STYLES = ['Casual', 'Streetwear', 'Formal', 'Avant-Garde', 'Minimalist'];

function getRandomElement<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function generateCatalog(): Product[] {
  const catalog: Product[] = [];
  
  const genders: Gender[] = ['Menswear', 'Womenswear'];
  const categories: Category[] = ['Shirts', 'Pants', 'Shoes'];
  const bodyTypes: BodyType[] = ['Slim', 'Athletic', 'Broad', 'Hourglass'];
  
  let globalId = 1;

  for (const gender of genders) {
    for (const category of categories) {
      for (const bodyType of bodyTypes) {
        
        // As requested: 10 unique, non-repeating images per sub-category
        for (let i = 1; i <= 10; i++) {
          
          const brand = getRandomElement(BRANDS, globalId * 3);
          const style = getRandomElement(STYLES, globalId * 7);
          
          let title = '';
          if (category === 'Shirts') title = `${bodyType} Fit ${getRandomElement(['Oxford', 'Silk Blouse', 'Poplin Shirt', 'Tunic', 'Drape Shirt'], globalId)}`;
          if (category === 'Pants') title = `${bodyType} Cut ${getRandomElement(['Trousers', 'Wide Leg Pant', 'Tailored Chino', 'Silk Blend Pant', 'Linen Pant'], globalId)}`;
          if (category === 'Shoes') title = `Designer ${getRandomElement(['Loafer', 'Mule', 'Derby', 'Sneaker', 'Chelsea Boot'], globalId)}`;
          
          const price = 250 + (globalId % 15) * 50;

          catalog.push({
            id: `prod_${globalId}`,
            title,
            brand,
            price,
            formattedPrice: `$${price}`,
            category,
            gender: [gender, 'Unisex'], // Make items slightly versatile
            bodyType: [bodyType],
            style: [style],
            image: ImageMappingService.getImageUrl(gender, category, bodyType, globalId),
            url: `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + title)}`
          });
          
          globalId++;
        }
      }
    }
  }
  
  return catalog;
}

export const initialProducts: Product[] = generateCatalog();
