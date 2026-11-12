import { useNavigate } from 'react-router';

import clsx from 'clsx';
import styles from './NotFoundPage.module.scss';

import { AppRoutes, routePaths } from '@/shared/config';
import { Button } from '@/shared/ui/Button';
import { useLocalizedRoutePath } from '@/shared/lib/routing';

function NotFoundPage() {
  const getLocalizedPath = useLocalizedRoutePath();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(getLocalizedPath(routePaths[AppRoutes.HOME]));
  };

  return (
    <main>
      <section className={clsx(styles.container, 'container')}>
        <div className={styles.up}>
          <p className="p p--primary">LOST IN THE GRAIN</p>
          <h1 className={styles.title}>404</h1>
          <h2>This page is still in the workshop.</h2>
          <p className={styles.description}>
            The page you’re looking for may have moved or no longer exists. Let’s find you something
            made to last.
          </p>
        </div>
        <Button onClick={goBack}>Go home</Button>
      </section>
    </main>
  );
}

export default NotFoundPage;
