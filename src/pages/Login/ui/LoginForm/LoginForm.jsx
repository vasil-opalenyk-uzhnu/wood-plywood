import { Link } from 'react-router';
import styles from './LoginForm.module.scss';

import { useLoginForm } from './useLoginForm/useLoginForm.js';

import { Input, InputPassword } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { AppRoutes, routePaths } from '@/shared/config';

function LoginForm() {
  const { errors, isPending, register, handleSubmit } = useLoginForm();

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <h3>Welcome back</h3>
      <p className="p">
        New here?{' '}
        <Link to="/register" className="link">
          Create an account
        </Link>
      </p>
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
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
