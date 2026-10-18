import { useState } from 'react';

import { Select } from '@/shared/ui/Select';

const SORT_OPTIONS = [
  { label: 'Popular first', value: 'popular-first' },
  { label: 'Popular last', value: 'popular-last' },
];

function SortOptionsSelect() {
  const [value, setValue] = useState('popular-first');

  return (
    <Select
      prefix="Sort"
      value={value}
      options={SORT_OPTIONS}
      onChange={(value) => setValue(value)}
    />
  );
}

export default SortOptionsSelect;
