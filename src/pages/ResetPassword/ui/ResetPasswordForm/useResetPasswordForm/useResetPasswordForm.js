import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { resetPasswordFormSchema } from './resetPasswordFormSchema.js';
import { resetPasswordApi } from '../../../api/resetPasswordApi.js';

import { useLocalizedRoutePath } from '@/shared/lib/routing';
import { AppRoutes, routePaths } from '@/shared/config';
import { toast } from '@/shared/lib/notifications';

export const useResetPasswordForm = () => {
  const navigate = useNavigate();
  const getLocalizedRoutePath = useLocalizedRoutePath();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has('token')) {
      const hasPreviousPage = window.history.state?.idx > 0;

      navigate(hasPreviousPage ? -1 : getLocalizedRoutePath(routePaths[AppRoutes.HOME]), {
        replace: true,
      });
    }
  }, [searchParams, navigate, getLocalizedRoutePath]);

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordApi.reset,
    enabled: !searchParams.has('token'),
    onSuccess: () => {
      toast.success('Password change successfully', { id: 'reset-password-success' });
      reset();
      navigate(getLocalizedRoutePath(routePaths[AppRoutes.LOGIN]), { replace: true });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'reset-password-error' });
    },
  });

  const { register, control, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });
  const { errors } = formState;

  const submitResetPassword = async (data) => {
    await mutate({
      password: data.password,
      token: searchParams.get('token'),
    });
  };

  return {
    control,
    errors,
    isPending,
    register,
    handleSubmit: handleSubmit(submitResetPassword),
  };
};
