import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logoutApi } from '../../../api/logoutApi.js';

import { toast } from '@/shared/lib/notifications';
import { useSessionStore } from '@/entities/session';

import { AppRoutes } from '@/shared/config';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: logoutApi.logout,
    onSuccess: (data) => {
      toast.success(data.message, { id: 'logout-success' });

      useSessionStore.getState().clear();
      queryClient.clear();

      navigate(AppRoutes.LOGIN);
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'logout-error' });
    },
  });

  const logout = useCallback(async () => {
    mutate();
  }, [mutate]);

  return {
    isLoading: isPending,
    logout,
  };
};
