import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import styles from './HomePage.module.scss';
import hero from '/images/hero.jpg';

import { PopularProducts } from '@/widgets/PopularProducts';
import { AboutSection } from '@/widgets/AboutSection';
import { CustomOrder } from '@/widgets/CustomOrder';

import { Button } from '@/shared/ui/Button';
import { useLocalizedRoutePath } from '@/shared/lib/routing';
import { AppRoutes, routePaths } from '@/shared/config';

function HomePage() {
  const { t } = useTranslation('translation');
  const getLocalizedPath = useLocalizedRoutePath();

  return (
    <main>
      <section id="hero" className={styles.hero}>
        <div className={styles.bg}>
          <img src={hero} alt={t('home.hero.image')} width={1920} height={1280} loading="lazy" />
        </div>
        <p className="p p--primary">{t('home.hero.description')}</p>
        <h1>Wood&Plywood</h1>
        <p className={clsx(styles.text, 'p p--text')}>{t('home.hero.paragraph')}</p>
        <Button to={getLocalizedPath(routePaths[AppRoutes.SHOP])}>{t('home.hero.button')}</Button>
        <div className={styles.scroll}>
          <p className="p">{t('home.hero.scroll')}</p>
        </div>
      </section>
      <PopularProducts />
      <AboutSection />
      <CustomOrder />
    </main>
  );
}

export default HomePage;
