import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { forgotPasswordFormSchema } from './forgotPasswordFormSchema.js';
import { forgotPasswordApi } from '../../../api/forgotPasswordApi.js';

import { toast } from '@/shared/lib/notifications';

export const useForgotPasswordForm = () => {
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: forgotPasswordApi.forgot,
    onSuccess: (data) => {
      toast.success(data.message, { id: 'forgot-password-success' });
      reset();
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'forgot-password-error' });
    },
  });

  const { register, control, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const { errors } = formState;

  const submitForgotPassword = async (data) => {
    await mutate({ ...data });
  };

  return {
    control,
    errors,
    isPending,
    isSuccess,
    isError,
    register,
    handleSubmit: handleSubmit(submitForgotPassword),
  };
};
