import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useMutation } from '@tanstack/react-query';

import { verifyEmailApi } from '../../../api/verifyEmailApi.js';

import { useLocalizedRoutePath } from '@/shared/lib/routing';
import { AppRoutes, routePaths } from '@/shared/config';
import { toast } from '@/shared/lib/notifications';

export const useVerifyEmail = () => {
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
    mutationFn: verifyEmailApi.verify,
    enabled: !searchParams.has('token'),
    onSuccess: (data) => {
      toast.success(data.message, { id: 'verify-email-success' });
      navigate(getLocalizedRoutePath(routePaths[AppRoutes.LOGIN]), { replace: true });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'verify-email-error' });
    },
  });

  const handleClick = () => {
    mutate({ token: searchParams.get('token') });
  };

  return {
    handleClick,
    isLoading: isPending,
  };
};
