import styles from './CategoryRadioGroup.module.scss';

import { CategoryChip } from '@/entities/category/ui';

const CATEGORIES = [
  { label: 'Cutting boards', slug: 'cutting-boards' },
  { label: 'Furniture', category: 'furniture' },
  { label: 'Home Decor', category: 'home-decor' },
  { label: 'Kids’ Items', category: 'kids-items' },
  { label: 'Garden', category: 'garden' },
];

function CategoryRadioGroup() {
  return (
    <ul className={styles.list}>
      <li>
        <CategoryChip selected>All</CategoryChip>
      </li>
      {CATEGORIES.map(({ label, slug }) => (
        <li key={slug}>
          <CategoryChip>{label}</CategoryChip>
        </li>
      ))}
    </ul>
  );
}

export default CategoryRadioGroup;
