import clsx from 'clsx';
import styles from './AboutSection.module.scss';
import aboutOne from '/images/about/1.jpg';
import aboutTwo from '/images/about/2.jpg';

import { StatCard } from '@/shared/ui/StatCard';
import { Section } from '@/shared/ui/Section';
import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t } = useTranslation('translation');

  const stats = [
    { label: '12', value: t('home.about.stats.year') },
    { label: '800+', value: t('home.about.stats.sold') },
    { label: '7', value: t('home.about.stats.used') },
  ];

  return (
    <Section
      id="about"
      isSecondary
      description={t('home.about.description')}
      title={t('home.about.title')}
    >
      <div className={styles.about}>
        <div className={styles.content}>
          <p className="p p--text">{t('home.about.paragraphs.one')}</p>
          <p className="p p--text">{t('home.about.paragraphs.two')}</p>
          <div className={styles.stats}>
            {stats.map(({ label, value }) => (
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
          <p className={clsx(styles.badge, 'p p--secondary')}>{t('home.about.badge')}</p>
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
