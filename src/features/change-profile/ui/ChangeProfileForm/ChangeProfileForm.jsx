import clsx from 'clsx';
import styles from './ChangeProfileForm.module.scss';

import { useChangeProfileForm } from './useChangeProfileForm/useChangeProfileForm.js';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

function ChangeProfileForm() {
  const { isChanging, isPending, errors, register, setIsChanging, reset, handleSubmit } =
    useChangeProfileForm();

  return (
    <form className={clsx(styles.root, 'block')} onSubmit={handleSubmit}>
      <h3>Personal information</h3>
      <p>Keep your contact details up to date.</p>
      <Input
        label="First name"
        required
        readOnly={!isChanging}
        placeholder="Your first name"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <Input
        label="Last name"
        required
        readOnly={!isChanging}
        placeholder="Your last name"
        {...register('lastName')}
        error={errors.lastName?.message}
      />
      {isChanging ? (
        <div>
          <Button type="submit" size="small" loading={isPending}>
            Save changes
          </Button>
          <Button
            onClick={() => {
              setIsChanging(false);
              reset();
            }}
            variant="transparent"
            size="small"
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => {
            setIsChanging(true);
          }}
          variant="secondary"
          size="small"
        >
          Change Profile
        </Button>
      )}
    </form>
  );
}

export default ChangeProfileForm;
