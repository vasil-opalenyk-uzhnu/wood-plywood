import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import styles from './Footer.module.scss';

import { Logo } from '@/shared/ui/Logo';
import { Navigation } from '@/shared/ui/Navigation';

import { AppRoutes, routePaths } from '@/shared/config';
import { useLocalizedRoutePath } from '@/shared/lib/routing';

function Footer() {
  const { t } = useTranslation('translation');
  const getLocalizedPath = useLocalizedRoutePath();

  const navLinks = [
    { href: getLocalizedPath(`${routePaths[AppRoutes.HOME]}/#hero`), label: t('navigation.home') },
    { href: getLocalizedPath(routePaths[AppRoutes.SHOP]), label: t('navigation.shop') },
    {
      href: getLocalizedPath(`${routePaths[AppRoutes.HOME]}/#about`),
      label: t('navigation.about'),
    },
    { href: getLocalizedPath(`${routePaths[AppRoutes.HOME]}/#own`), label: t('navigation.own') },
  ];

  return (
    <footer className={styles.root}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.up}>
          <div className={styles.content}>
            <Logo variant="secondary" />
            <p>{t('footer.description')}</p>
          </div>
          <Navigation
            order="column"
            variant="secondary"
            links={navLinks}
            label="NAVIGATION"
            isLabelVisible
          />
        </div>
        <hr className="line" />
        <div className={styles.down}>
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.made')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
