import styles from './ForgotPasswordForm.module.scss';
import clsx from 'clsx';

import { useForgotPasswordForm } from './useForgotPasswordForm/useForgotPasswordForm.js';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

function ForgotPasswordForm() {
  const { errors, isPending, isSuccess, register, handleSubmit } = useForgotPasswordForm();

  return (
    <>
      {!isSuccess ? (
        <form className={clsx(styles.root, 'block')} onSubmit={handleSubmit}>
          <h3>Forgot password</h3>
          <p className="p">We will send a message to your email inbox.</p>
          <Input
            label="Email"
            required
            placeholder="tarashevchenko@gmail.com"
            {...register('email')}
            error={errors.email?.message}
          />
          <Button size="small" type="submit" fullWidth loading={isPending}>
            submit
          </Button>
        </form>
      ) : (
        <div>Check your mailbox</div>
      )}
    </>
  );
}

export default ForgotPasswordForm;
