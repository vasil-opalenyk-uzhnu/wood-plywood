import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useMe, useUpdate } from '@/entities/user';
import { changeProfileFormSchema } from './changeProfileFormSchema.js';

export const useChangeProfileForm = () => {
  const [isChanging, setIsChanging] = useState(false);

  const { data } = useMe();
  const { mutate, isPending } = useUpdate();

  const { control, formState, register, handleSubmit, reset } = useForm({
    resolver: zodResolver(changeProfileFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    values: data && { firstName: data.user.firstName, lastName: data.user.lastName },
    mode: 'onChange',
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    if (isChanging) {
      mutate({ ...data });
      setIsChanging(false);
    }
  };

  return {
    isChanging,
    isPending,
    control,
    errors,
    register,
    setIsChanging,
    reset,
    handleSubmit: handleSubmit(onSubmit),
  };
};
