import { useState } from 'react';
import clsx from 'clsx';
import styles from './AddReviewForm.module.scss';

import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { Rating } from '@/shared/ui/Rating';
import { Button } from '@/shared/ui/Button';

function AddReviewForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(5);

  function handleSubmit() {
    console.log('Create new review!');
    console.log({
      title,
      description,
      rating,
    });
  }

  return (
    <form onSubmit={handleSubmit} className={clsx(styles.root, 'block')}>
      <Input
        label="Review title"
        placeholder="Summarise your experience"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        label="Review"
        placeholder="Tell others what you think about this product..."
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Rating value={rating} onChange={setRating} size="large" />
      <Button size="small">Submit review</Button>
    </form>
  );
}

export default AddReviewForm;
