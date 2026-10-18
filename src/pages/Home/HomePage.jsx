import clsx from 'clsx';
import styles from './HomePage.module.scss';
import hero from '/images/hero.jpg';

import { PopularProducts } from '@/widgets/PopularProducts';
import { AboutSection } from '@/widgets/AboutSection';
import { CustomOrder } from '@/widgets/CustomOrder';

import { Button } from '@/shared/ui/Button';

function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.bg}>
          <img src={hero} alt="hero" width={1920} height={1280} loading="lazy" />
        </div>
        <p className="p p--primary">Handcrafted with soul</p>
        <h1>Wood&Plywood</h1>
        <p className={clsx(styles.text, 'p p--text')}>
          Small-batch wooden objects shaped in Ukraine for meaningful everyday rituals.
        </p>
        <Button to="https://google.com">Shop now</Button>
        <div className={styles.scroll}>
          <p className="p">SCROLL</p>
        </div>
      </section>
      <PopularProducts />
      <AboutSection />
      <CustomOrder />
    </main>
  );
}

export default HomePage;
