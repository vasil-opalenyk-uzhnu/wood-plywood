import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import clsx from 'clsx';

import { useHeaderScroll } from './useHeaderScroll/useHeaderScroll.js';

import { Logo } from '@/shared/ui/Logo';
import { Navigation } from '@/shared/ui/Navigation';
import { useLocalizedRoutePath } from '@/shared/lib/routing';
import { AppRoutes, routePaths } from '@/shared/config';

function Header() {
  const { t } = useTranslation('translation');
  const { pathname } = useLocation();
  const getLocalizedPath = useLocalizedRoutePath();

  const localizedHomePath = getLocalizedPath(routePaths[AppRoutes.HOME]);
  const isHomePage = pathname === localizedHomePath || pathname === `${localizedHomePath}/`;

  const tone = isHomePage ? 'base' : 'secondary';
  const headerRef = useHeaderScroll();

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
    <header ref={headerRef} className={clsx(styles.root, 'container')}>
      <div className={styles.container}>
        <Logo className={styles.logo} variant={tone} />
        <Navigation links={navLinks} label="NAVIGATION" variant={tone} />
      </div>
    </header>
  );
}

export default Header;
