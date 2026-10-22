import { useState } from 'react';
import clsx from 'clsx';
import styles from './ProductFilters.module.scss';

import CategoryRadioGroup from '../CategoryRadioGroup/CategoryRadioGroup.jsx';

import { InputSearch } from '@/shared/ui/Input';
import { RangeSlider } from '@/shared/ui/RangeSlider';

function ProductFilters({ className }) {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState([800, 10000]);

  return (
    <aside className={clsx(styles.root, 'block', className)}>
      <h3 className={styles.title}>Filter</h3>
      <InputSearch
        label="Search text"
        isLabelVisible={false}
        placeholder="Search..."
        value={search}
        onChange={(newSearch) => setSearch(newSearch)}
      />
      <hr className="line" />
      <div className={styles.row}>
        <p className="p p--secondary">category</p>
        <CategoryRadioGroup />
      </div>
      <hr className="line" />
      <div className={styles.row}>
        <p className="p p--secondary">category</p>
        <RangeSlider
          values={values}
          onChange={(newValues) => setValues(newValues)}
          min={800}
          max={10000}
        />
      </div>
    </aside>
  );
}

export default ProductFilters;
