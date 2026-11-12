import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sessionApi } from '@/entities/session';

import { toast } from '@/shared/lib/notifications';

export const useRevokeSession = (session) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => sessionApi.revoke(session.id),
    onSuccess: (data) => {
      toast.success(data.message, { id: 'session-revoke-success' });
      queryClient.invalidateQueries({ queryKey: ['sessions'] });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'session-revoke-error' });
    },
  });

  return {
    mutate,
    isPending,
  };
};
