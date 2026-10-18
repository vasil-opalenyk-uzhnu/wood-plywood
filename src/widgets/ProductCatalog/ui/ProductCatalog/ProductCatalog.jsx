import clsx from 'clsx';
import styles from './ProductCatalog.module.scss';

import {
  ProductFilters,
  ShowOptionsSelect,
  SortOptionsSelect,
} from '@/features/product-filters/ui/index.js';

import { Section } from '@/shared/ui/Section';
import { ProductCard } from '@/entities/product/ui/index.js';

const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=936&h=976&q=80`;

const PRODUCTS = [
  {
    id: 1,
    slug: 'oak-board-with-spoons',
    title: 'Oak Board with Spoons',
    category: 'Cutting Boards',
    description: 'Solid oak board finished with food-safe oil, paired with two hand-carved spoons.',
    image: unsplash('photo-1685022056255-523278bf43ec'),
    photographer: 'Matteo Vistocco',
    price: 2800,
    stock: 12,
    rating: 4.8,
    reviewsCount: 52,
  },
  {
    id: 2,
    slug: 'walnut-serving-board',
    title: 'Walnut Serving Board',
    category: 'Cutting Boards',
    description:
      'A warm walnut board for cheese, fruit and baked goods. Smooth edges, easy to clean.',
    image: unsplash('photo-1638725073353-7fa130c0edc5'),
    photographer: 'Samantha Fields',
    price: 1900,
    stock: 3,
    rating: 4.6,
    reviewsCount: 18,
  },
  {
    id: 3,
    slug: 'minimal-everyday-board',
    title: 'Minimal Everyday Board',
    category: 'Cutting Boards',
    description:
      'A simple, sturdy board for daily cooking. Hangs on a hook thanks to the drilled handle.',
    image: unsplash('photo-1583596838470-10ae8e96a95a'),
    photographer: 'UNIBOA',
    price: 1200,
    stock: 0,
    rating: 4.9,
    reviewsCount: 27,
  },
  {
    id: 4,
    slug: 'oak-chair-with-cushion',
    title: 'Oak Chair with Cushion',
    category: 'Furniture',
    description: 'Clean-lined dining chair with a removable linen cushion. Joined without screws.',
    image: unsplash('photo-1774294067819-91abcd349372'),
    photographer: 'syahmi syahir',
    price: 6400,
    stock: 8,
    rating: 4.7,
    reviewsCount: 31,
  },
  {
    id: 5,
    slug: 'studio-wooden-chair',
    title: 'Studio Wooden Chair',
    category: 'Furniture',
    description:
      'Lightweight chair with a curved back, made from beech and finished with natural wax.',
    image: unsplash('photo-1699588772787-1eed3b726e0a'),
    photographer: 'Hongly Oung',
    price: 5200,
    stock: 4,
    rating: 4.5,
    reviewsCount: 14,
  },
  {
    id: 6,
    slug: 'wooden-flower-box',
    title: 'Wooden Flower Box',
    category: 'Garden',
    description:
      'Weather-resistant pine box with drainage holes, ready for herbs or seasonal flowers.',
    image: unsplash('photo-1686945996715-ab5a0b74188f'),
    photographer: 'Amy W.',
    price: 950,
    stock: 20,
    rating: 4.4,
    reviewsCount: 22,
  },
  {
    id: 7,
    slug: 'twin-wall-planters',
    title: 'Twin Wall Planters',
    category: 'Home Decor',
    description:
      'A pair of compact wooden planters that brighten up a wall, balcony or windowsill.',
    image: unsplash('photo-1775384192431-41f30cda274c'),
    photographer: 'Katja Ano',
    price: 1400,
    stock: 15,
    rating: 4.8,
    reviewsCount: 40,
  },
  {
    id: 8,
    slug: 'wooden-elephant-trio',
    title: 'Wooden Elephant Trio',
    category: "Kids' Items",
    description:
      'Three hand-sanded elephants in different sizes. Safe water-based paint, no sharp edges.',
    image: unsplash('photo-1703581698778-2224c729135b'),
    photographer: 'Geoff Oliver',
    price: 780,
    stock: 2,
    rating: 5.0,
    reviewsCount: 9,
  },
  {
    id: 9,
    slug: 'natural-toy-blocks',
    title: 'Natural Toy Blocks',
    category: "Kids' Items",
    description:
      'A set of untreated beech blocks for stacking and building. Smooth, durable and splinter-free.',
    image: unsplash('photo-1568828668638-b1b4014d91a2'),
    photographer: 'Susan Holt Simpson',
    price: 1100,
    stock: 30,
    rating: 4.9,
    reviewsCount: 63,
  },
];

function ProductCatalog() {
  const show = 9;
  const all = 18;

  return (
    <Section title="Handcrafted wooden goods" description="OUR STORE">
      <div className={styles.root}>
        <ProductFilters className={styles.aside} />
        <div className={clsx(styles.header, 'block')}>
          <p className="p">
            Showing {show} of {all} products
          </p>
          <div className={styles.selects}>
            <SortOptionsSelect />
            <ShowOptionsSelect />
          </div>
        </div>
        <ul className={styles.list}>
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ProductCatalog;
