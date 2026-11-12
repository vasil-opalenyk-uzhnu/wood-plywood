import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginFormSchema } from './loginFormSchema.js';
import { loginApi } from '../../../api/loginApi.js';

import { useSessionStore } from '@/entities/session';
import { toast } from '@/shared/lib/notifications';

export const useLoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from
    ? `${location.state.from.pathname}${location.state.from.search}${location.state.from.hash}`
    : '/';

  const setAccessToken = useSessionStore((state) => state.setAccessToken);
  const { mutate, isPending } = useMutation({
    mutationFn: loginApi.login,
    onSuccess: (data) => {
      toast.success(data.message, { id: 'login-success' });

      setAccessToken(data.accessToken);
      reset();

      navigate(redirectTo, { replace: true });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'login-error' });
    },
  });

  const { register, control, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const { errors } = formState;

  const submitLogin = async (data) => {
    await mutate({ ...data });
  };

  return {
    control,
    errors,
    isPending,
    register,
    handleSubmit: handleSubmit(submitLogin),
  };
};
