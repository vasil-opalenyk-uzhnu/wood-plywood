import clsx from 'clsx';
import styles from './ReviewCard.module.scss';
import { DEFAULT_REVIEW_LOCALE } from './config.js';

import { Rating } from '@/shared/ui/Rating';
import { Avatar } from '@/shared/ui/Avatar';

import { formatDate } from './formatDate.js';

function ReviewCard(props) {
  const { review, className, locale = DEFAULT_REVIEW_LOCALE } = props;

  const { author, avatar, rating, title, text, createdAt } = review;

  return (
    <article className={clsx('block', className, styles.root)}>
      <header className={styles.header}>
        <div className={styles.person}>
          <Avatar src={avatar} name={author} size="small" />
          <div className={styles.meta}>
            <p className={styles.name}>{author}</p>
            <time className="p" dateTime={createdAt}>
              {formatDate(createdAt, locale)}
            </time>
          </div>
        </div>
        <Rating value={rating} readOnly isText={false} />
      </header>
      {title && <h3>{title}</h3>}
      <p className="p">{text}</p>
    </article>
  );
}

export default ReviewCard;
