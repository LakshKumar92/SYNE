export type Gender = 'Menswear' | 'Womenswear' | 'Unisex';
export type Category = 'Shirts' | 'Pants' | 'Shoes';
export type BodyType = 'Slim' | 'Athletic' | 'Broad' | 'Hourglass';

const UNSPLASH_IDS = [
  '1515886657613-9f3515b0c78f', // 0
  '1485968579580-b6d095142e6e', // 1
  '1543163521-1bf539c55dd2', // 2
  '1512436991641-6745cdb1723f', // 3
  '1487222477894-8943e31ef7b2', // 4
  '1532453288672-3a27e9be9efd', // 5
  '1509319117193-57bab727e09d', // 6
  '1490481651871-ab68de25d43d', // 7
  '1483985988355-763728e1935b', // 8
  '1445205170230-053b83016050', // 9
  '1517841905240-472988babdf9', // 10
  '1469334031218-e382a71b716b', // 11
  '1502716119720-b23a93e5fe1b', // 12
  '1495385794356-15371f348c31', // 13
  '1503342217505-b0a15ec3261c', // 14
  '1496747611176-843222e1e57c', // 15
  '1495121605193-b116b5b9c5fe', // 16
  '1624378441864-6d811fb15115', // 17
  '1520639888713-7851133b1ed0', // 18
  '1596755094514-f87e32f85e2c', // 19
  '1603252109303-2751441dd157', // 20
  '1574180566232-aaad1b5b8450', // 21
  '1542272604-787c3835535d', // 22
  '1621072156002-e2fccdc0b176', // 23
  '1626497764746-6dc36546b388', // 24
  '1585487000160-6ebcfceb0d03', // 25
  '1555689502-c4b22d76c56f', // 26
  '1541099649105-f69ad21f3246', // 27
  '1624378439575-d8705ad7ae80', // 28
  '1506629082955-511b1aa562c8', // 29
  '1462392246754-28dfa2df8e6b', // 30
  '1549298916-b41d501d3772', // 31
  '1560769629-975ec94e6a86', // 32
  '1600185365926-3a2ce3cdb9eb'  // 33
];

export class ImageMappingService {
  /**
   * Returns a real Unsplash image URL from our curated collection.
   */
  public static getImageUrl(
    gender: Gender, 
    category: Category, 
    bodyType: BodyType, 
    index: number
  ): string {
    
    // Hardcoded overrides to ensure specific sections look exactly as they did before
    if (index === 991) return `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1500&auto=format&fit=crop`;
    if (index === 992) return `https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1000&auto=format&fit=crop`;
    if (index === 993) return `https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop`;
    if (index === 994) return `https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop`;
    if (index === 995) return `https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop`;

    const imageId = UNSPLASH_IDS[index % UNSPLASH_IDS.length];
    return `https://images.unsplash.com/photo-${imageId}?q=80&w=800&auto=format&fit=crop`;
  }

  /**
   * Generates a batch of N unique images for a specific sub-category
   */
  public static generateBatch(gender: Gender, category: Category, bodyType: BodyType, count: number = 10): string[] {
    const urls: string[] = [];
    for (let i = 1; i <= count; i++) {
      urls.push(this.getImageUrl(gender, category, bodyType, i));
    }
    return urls;
  }
}
