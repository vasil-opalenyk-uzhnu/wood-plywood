import clsx from 'clsx';
import styles from './Footer.module.scss';

import { Navigation } from '@/shared/ui/Navigation';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.up}>
          <div className={styles.content}>
            {/* logo */}
            <p>
              Handcrafted wooden goods made with care in a small Kuiv workshop. Each piece is
              unique.
            </p>
          </div>
          <Navigation
            order="column"
            variant="secondary"
            links={NAV}
            label="NAVIGATION"
            isLabelVisible
          />
        </div>
        <hr className="line" />
        <div className={styles.down}>
          <p>© 2026 Wood&Plywood. All rights reserved.</p>
          <p>Made with ♥ in Ukraine</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
