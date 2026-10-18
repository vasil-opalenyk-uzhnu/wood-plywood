import clsx from 'clsx';
import styles from './CustomOrder.module.scss';
import customOrderImage from '/images/custom-order.jpg';

import { Section } from '@/shared/ui/Section';

import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';

function CustomOrder() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Send your order');
  };

  return (
    <Section order="reverse" title="Order something one of a kind" description="Find us">
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={customOrderImage} alt="" width={536} height={560} loading="lazy" />
        </div>
        <form onSubmit={handleSubmit} className={clsx(styles.form, 'block')}>
          <h3>Tell us about your piece</h3>
          <Input placeholder="Taras" label="Your first name" required autoComplete="name" />
          <Input placeholder="Shevchenko" label="Your last name" required autoComplete="name" />
          <Input
            placeholder="your@gmail.com"
            label="Email or Telegram"
            required
            autoComplete="email"
          />
          <Textarea
            placeholder="I want..."
            label="Describe your idea"
            required
            hint="Size, wood, engraving, deadline: whatever you can share"
          />

          <Button type="submit" loadingText="Sending...">
            Send request
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default CustomOrder;
