import styles from './PopularProduct.module.scss';

import { ProductCard } from '@/entities/product/ui';

import { Section } from '@/shared/ui/Section';
import { Button } from '@/shared/ui/Button';

const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=936&h=976&q=80`;

const PRODUCTS = [
  {
    id: 1,
    slug: 'oak-board-with-spoons',
    title: 'Oak Board with Spoons',
    category: 'Serving Sets',
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
    category: 'Serving Boards',
    image: unsplash('photo-1638725073353-7fa130c0edc5'),
    photographer: 'Samantha Fields',
    price: 1900,
    oldPrice: null,
    stock: 3,
    rating: 4.6,
    reviewsCount: 18,
  },
  {
    id: 3,
    slug: 'rustic-butcher-board',
    title: 'Rustic Butcher Board',
    category: 'Cutting Boards',
    image: unsplash('photo-1690983329845-638ec321647d'),
    photographer: 'Sergey Kotenev',
    price: 3200,
    stock: 0,
    rating: 4.9,
    reviewsCount: 27,
  },
  {
    id: 4,
    slug: 'rustic-butcher-board',
    title: 'Rustic Butcher Board',
    category: 'Cutting Boards',
    image: unsplash('photo-1690983329845-638ec321647d'),
    photographer: 'Sergey Kotenev',
    price: 3200,
    stock: 0,
    rating: 4.9,
    reviewsCount: 27,
  },
];

function PopularProducts() {
  const handleAddToCart = (product) => {
    console.log('Added to cart ' + product.id);
  };

  return (
    <Section
      isDecorationVisible={false}
      bodyClassName={styles.body}
      description="HANDMADE. HONEST MATERIALS. BUILT TO LAST."
      title="Popular Products"
      side="left"
    >
      <ul className={styles.list}>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </li>
        ))}
      </ul>
      <Button variant="secondary">View all products</Button>
    </Section>
  );
}

export default PopularProducts;
