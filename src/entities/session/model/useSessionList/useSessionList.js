import { useQuery } from '@tanstack/react-query';

import { sessionApi } from '../../api/sessionApi.js';

import { useIsAuthenticated } from '@/entities/session';

export const useSessionList = () => {
  const isAuthenticated = useIsAuthenticated();

  return useQuery({
    queryFn: sessionApi.list,
    queryKey: ['sessions'],
    enabled: isAuthenticated,
    retry: true,
  });
};
