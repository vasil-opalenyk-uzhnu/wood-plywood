import { useQuery } from '@tanstack/react-query';

import { useIsAuthenticated } from '@/entities/session';

import { userApi } from '../api/userApi.js';

export const useMe = () => {
  const isAuthenticated = useIsAuthenticated();

  return useQuery({
    queryFn: userApi.me,
    queryKey: ['user'],
    enabled: isAuthenticated,
    retry: true,
  });
};
