import { useState } from 'react';

import { Select } from '@/shared/ui/Select';

const SHOW_OPTIONS = [
  { label: '3', value: 3 },
  { label: '6', value: 6 },
  { label: '9', value: 9 },
  { label: '12', value: 12 },
];

function ShowOptionsSelect() {
  const [value, setValue] = useState(3);

  return (
    <Select
      value={value}
      options={SHOW_OPTIONS}
      prefix="Show"
      onChange={(value) => setValue(value)}
    />
  );
}

export default ShowOptionsSelect;
