import { useState } from 'react';
import { Link } from 'react-router';
import styles from './RegisterForm.module.scss';

import { Input, InputPassword } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={styles.root}>
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
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        label="Last mame"
        required
        placeholder="Shevchenko"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
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
        Create account
      </Button>
    </form>
  );
}

export default RegisterForm;
