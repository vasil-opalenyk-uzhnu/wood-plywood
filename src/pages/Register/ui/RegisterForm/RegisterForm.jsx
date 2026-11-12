import { Link } from 'react-router';
import styles from './RegisterForm.module.scss';

import { useRegisterForm } from './useRegisterForm/useRegisterForm.js';

import { Input, InputPassword } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { AppRoutes, routePaths } from '@/shared/config';

function RegisterForm() {
  const { errors, isPending, register, handleSubmit } = useRegisterForm();

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <h3>Create an account</h3>
      <p className="p">
        Already have an account?{' '}
        <Link to="/login" className="link">
          Log in
        </Link>
      </p>
      <Input
        label="First mame"
        required
        placeholder="Taras"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <Input
        label="Last mame"
        required
        placeholder="Shevchenko"
        {...register('lastName')}
        error={errors.lastName?.message}
      />
      <Input
        label="Email"
        required
        placeholder="tarashevchenko@gmail.com"
        {...register('email')}
        error={errors.email?.message}
      />
      <InputPassword
        label="Password"
        required
        placeholder="••••••••"
        {...register('password')}
        error={errors.password?.message}
      />
      <Link to={routePaths[AppRoutes.FORGOT_PASSWORD]}>Forgot password?</Link>
      <Button size="small" type="submit" fullWidth loading={isPending}>
        Create account
      </Button>
    </form>
  );
}

export default RegisterForm;
