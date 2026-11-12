import { useTranslation } from 'react-i18next';

import clsx from 'clsx';
import styles from './CustomOrder.module.scss';
import customOrderImage from '/images/custom-order.jpg';

import { Section } from '@/shared/ui/Section';

import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';

function CustomOrder() {
  const { t } = useTranslation('translation');
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Send your order');
  };

  return (
    <Section
      id="own"
      order="reverse"
      title={t('home.order.title')}
      description={t('home.order.description')}
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={customOrderImage} alt="" width={536} height={560} loading="lazy" />
        </div>
        <form onSubmit={handleSubmit} className={clsx(styles.form, 'block')}>
          <h3>{t('home.order.form.title')}</h3>
          <Input
            placeholder={t('home.order.form.name.placeholder')}
            label={t('home.order.form.name.label')}
            required
            autoComplete="name"
          />
          <Input
            placeholder={t('home.order.form.surname.placeholder')}
            label={t('home.order.form.surname.label')}
            required
            autoComplete="name"
          />
          <Input
            placeholder={t('home.order.form.email.placeholder')}
            label={t('home.order.form.email.label')}
            required
            autoComplete="email"
          />
          <Textarea
            placeholder={t('home.order.form.description.placeholder')}
            label={t('home.order.form.description.label')}
            required
            hint={t('home.order.form.description.hint')}
          />
          <Button type="submit" loadingText={t('home.order.form.button.loading')}>
            {t('home.order.form.button.text')}
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default CustomOrder;
