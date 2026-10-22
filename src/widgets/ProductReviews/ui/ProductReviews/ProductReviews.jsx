import styles from './ProductReviews.module.scss';

import { AddReviewForm } from '@/features/add-review/ui';

import { RatingSummary, ReviewCard } from '@/entities/review/ui';

const REVIEWS = [
  {
    id: 1,
    author: 'Maruna Kovalenko',
    rating: 5,
    title: 'Absolutely stunning quality',
    text: 'I ordered this as a gift for my mother and she was completely speechless. The grain on the board is gorgeous, much better than any photo can show. It arrived wrapped in craft paper and felt genuinely precious. Already have two more people asking where I bought it.',
    createdAt: '2024-03-12',
  },
  {
    id: 2,
    author: 'Andrii Bondarenko',
    rating: 5,
    title: 'Heavy, solid and beautifully finished',
    text: 'You can tell the wood was chosen by hand. No warping after three months of daily use, and the oil finish still looks fresh. The juice groove is deep enough to catch everything from a roast.',
    createdAt: '2024-03-04',
  },
  {
    id: 3,
    author: 'Olena Melnyk',
    rating: 5,
    title: 'Perfect for cheese nights',
    text: 'We use it as a serving board for charcuterie and it looks like it came from a high-end restaurant. Guests keep asking about it.',
    createdAt: '2024-02-27',
  },
  {
    id: 4,
    author: 'Taras Shevchuk',
    rating: 4,
    title: 'Great board, slightly smaller than expected',
    text: 'The quality is excellent and the edges are smooth, but I should have checked the dimensions more carefully. It is a bit compact for carving a whole chicken. For everyday vegetables and bread it is ideal.',
    createdAt: '2024-02-19',
  },
  {
    id: 5,
    author: 'Iryna Kravchenko',
    rating: 5,
    title: 'Worth every hryvnia',
    text: 'I was hesitating because of the price, and I regret nothing. The surface is silky and the hanging hole is a thoughtful touch.',
    createdAt: '2024-02-11',
  },
];

const REVIEWS_SUMMARY = {
  average: 4.8,
  total: 32,
  distribution: { 5: 27, 4: 4, 3: 1, 2: 0, 1: 0 },
};

function ProductReviews() {
  return (
    <section className={styles.root}>
      <h2 id="reviews-title" className="visible-hidden">
        Customer reviews
      </h2>

      <aside className={styles.side}>
        <RatingSummary
          average={REVIEWS_SUMMARY.average}
          total={REVIEWS_SUMMARY.total}
          distribution={REVIEWS_SUMMARY.distribution}
        />
        <AddReviewForm />
      </aside>

      <ul className={styles.list}>
        {REVIEWS.map((review) => (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductReviews;
