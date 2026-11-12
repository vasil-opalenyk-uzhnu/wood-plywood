import styles from './ResetPasswordForm.module.scss';
import clsx from 'clsx';

import { useResetPasswordForm } from './useResetPasswordForm/useResetPasswordForm.js';

import { InputPassword } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

function ResetPasswordForm() {
  const { errors, isPending, register, handleSubmit } = useResetPasswordForm();

  return (
    <form className={clsx(styles.root, 'block')} onSubmit={handleSubmit}>
      <h3>Reset password</h3>
      <p>Enter a new password</p>
      <InputPassword
        label="Password"
        required
        placeholder="••••••••"
        {...register('password')}
        error={errors.password?.message}
      />
      <InputPassword
        label="Confirm password"
        required
        placeholder="••••••••"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button size="small" type="submit" loading={isPending}>
        Change password
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
