import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerFormSchema } from './registerFormSchema.js';
import { registerApi } from '../../../api/registerApi.js';

import { toast } from '@/shared/lib/notifications';

export const useRegisterForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: registerApi.register,
    onSuccess: (data) => {
      toast.success(data.message, { id: 'register-success' });
      toast.success('Please go to your email inbox and activate your account', {
        id: 'register-info',
      });
      reset();
    },
    onError: (e) => {
      toast.error(e.response?.data.message || e.message, { id: 'register-error' });
    },
  });

  const { register, control, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const { errors } = formState;

  const submitRegister = async (data) => {
    await mutate({ ...data });
  };

  return {
    control,
    errors,
    isPending,
    register,
    handleSubmit: handleSubmit(submitRegister),
  };
};
