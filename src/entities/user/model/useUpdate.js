import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userApi } from '../api/userApi.js';
import { toast } from '@/shared/lib/notifications/index.js';

export const useUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => userApi.update(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'user-update-error' });
    },
  });
};
