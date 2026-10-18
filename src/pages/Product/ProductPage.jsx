import styles from './ProductPage.module.scss';

import { ProductReviews } from '@/widgets/ProductReviews';
import { ProductSection } from '@/widgets/ProductSection';

import { ProductSpecs } from '@/entities/product/ui';

import { Tabs } from '@/shared/ui/Tabs';
import clsx from 'clsx';

const specs = [
  { id: 'material', label: 'Material', value: 'Solid white oak' },
  { id: 'dimensions', label: 'Dimensions', value: '38 × 24 × 1.8 cm' },
  { id: 'weight', label: 'Weight', value: '820 g' },
];

function ProductPage() {
  return (
    <main>
      <ProductSection />
      <div className={clsx(styles.container, 'container')}>
        <Tabs
          tabs={[
            {
              label: 'Specifications',
              content: <ProductSpecs specs={specs} title="Specifications" />,
            },
            { label: 'Reviews', content: <ProductReviews /> },
          ]}
        />
      </div>
    </main>
  );
}

export default ProductPage;
