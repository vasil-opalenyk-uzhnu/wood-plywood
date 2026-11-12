import clsx from 'clsx';
import styles from './AuthPageLayout.module.scss';
import image from '/images/auth/img.jpg';

function AuthPageLayout({ children }) {
  return (
    <main className={styles.root}>
      <section className={clsx(styles.section, 'container', 'block')}>
        <div className={styles.image}>
          <img src={image} alt="" width={530} height={680} />
        </div>
        <div className={styles.main}>{children}</div>
      </section>
    </main>
  );
}

export default AuthPageLayout;
