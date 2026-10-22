import clsx from 'clsx';
import styles from './AboutSection.module.scss';
import aboutOne from '/images/about/1.jpg';
import aboutTwo from '/images/about/2.jpg';

import { StatCard } from '@/shared/ui/StatCard';
import { Section } from '@/shared/ui/Section';

const STATS = [
  { label: '12', value: 'Years of experience' },
  { label: '800+', value: 'Handmade items sold' },
  { label: '7', value: 'Wood species used' },
];

function AboutSection() {
  return (
    <Section
      isSecondary
      description="ABOUT US"
      title="One craftsman, one workshop, one piece at a time."
    >
      <div className={styles.about}>
        <div className={styles.content}>
          <p className="p p--text">
            One workshop, dedicated craftsmanship, one piece at a time Our journey began with a deep
            respect for the craft and woodworking traditions passed down through generations. In
            2012, we opened our workshop in Kyiv — a place where every piece is shaped by hand,
            carefully sanded, and finished with natural oil.
          </p>
          <p className="p p--text">
            We work with oak, walnut, ash, pine, cedar, cherry, and maple — all sourced from
            sustainable Ukrainian forests. No mass production, no shortcuts. Just wood, tools, and
            time.
          </p>
          <div className={styles.stats}>
            {STATS.map(({ label, value }) => (
              <StatCard key={label} label={label} value={value} />
            ))}
          </div>
        </div>
        <div className={styles.photo}>
          <img
            className={styles.one}
            src={aboutOne}
            alt=""
            width={288}
            height={384}
            loading="lazy"
          />
          <img
            className={styles.two}
            src={aboutTwo}
            alt=""
            width={256}
            height={288}
            loading="lazy"
          />
          <p className={clsx(styles.badge, 'p p--secondary')}>HANDMADE.</p>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
