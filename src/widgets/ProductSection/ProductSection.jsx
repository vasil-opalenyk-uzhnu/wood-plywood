import clsx from 'clsx';
import { useState } from 'react';
import styles from './ProductSection.module.scss';

import { ProductGallery, ProductPrice, StockBadge } from '@/entities/product/ui';

import { Rating } from '@/shared/ui/Rating';
import { Counter } from '@/shared/ui/counter';
import { Button } from '@/shared/ui/Button';
import { Section } from '@/shared/ui/Section';

const unsplash = (photoId, size) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${size}&q=80`;

const toImage = ({ id, photoId, alt, photographer }) => ({
  id,
  alt,
  photographer,
  src: unsplash(photoId, 1200),
  thumb: unsplash(photoId, 240),
});

const GALLERY_IMAGES = [
  toImage({
    id: 1,
    photoId: 'photo-1690983322868-4778f289ec03',
    alt: 'Wooden cutting board with a knife and a fork on a dark table',
    photographer: 'Sergey Kotenev',
  }),
  toImage({
    id: 2,
    photoId: 'photo-1690983321709-0eccbcb20d00',
    alt: 'Cutting board with two knives, top view',
    photographer: 'Sergey Kotenev',
  }),
  toImage({
    id: 3,
    photoId: 'photo-1611600700192-d87eaeed4f81',
    alt: 'Close-up of light wood grain',
    photographer: 'Pandav Tank',
  }),
  toImage({
    id: 4,
    photoId: 'photo-1564512533667-015a90133f04',
    alt: 'Light beige wood texture',
    photographer: 'Stephanie Moody',
  }),
];

function ProductSection() {
  const [count, setCount] = useState(1);

  return (
    <Section isDecorationVisible={false}>
      <div className={clsx(styles.container, 'container')}>
        <ProductGallery images={GALLERY_IMAGES} title="Oak Serving Board" />
        <div className={styles.content}>
          <div className={styles.up}>
            <span className={styles.tag}>Cutting boards</span>
            <h2>Oak Serving Board</h2>
            <div className={styles.row}>
              <StockBadge quantity={5} variant="transparent" />
              <Rating value={4.8} readOnly />
            </div>
            <ProductPrice price={2800} oldPrice={3500} size="large" />
          </div>
          <hr className="line" />
          <p className="p">
            A generously sized serving board cut from a single slab of slow-grown Ukrainian oak. The
            grain runs the full length of the board, sealed with food-safe linseed oil. Each board
            is unique — knots, grain patterns, and colour vary naturally.
          </p>
          <div className={styles.row}>
            <Counter
              value={count}
              onChange={(count) => setCount(count)}
              label="ProductSection count"
            />
            <Button size="small" fullWidth>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProductSection;
