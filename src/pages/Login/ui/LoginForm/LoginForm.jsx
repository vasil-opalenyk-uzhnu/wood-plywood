import { useState } from 'react';
import styles from './LoginForm.module.scss';

import { Input, InputPassword } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={styles.root}>
      <h3>Welcome back</h3>
      <p className="p">
        New here?{' '}
        <a href="https://google.com" className="link">
          Create an account
        </a>
      </p>
      <Input
        label="Email"
        required
        placeholder="your@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPassword
        label="Password"
        required
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="https://google.com">Forgot password?</a>
      <Button size="small" type="submit" fullWidth>
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
