import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useSessionStore } from '@/entities/session';

import { configureBaseQueryWithReauth, refreshAccessToken } from '@/shared/api';

export const useInitializeSession = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    configureBaseQueryWithReauth({
      getAccessToken: () => useSessionStore.getState().accessToken,
      setAccessToken: (token) => useSessionStore.getState().setAccessToken(token),
      onSessionLost: () => {
        useSessionStore.getState().clear();
        queryClient.clear();
      },
    });
  }, [queryClient]);

  useEffect(() => {
    refreshAccessToken()
      .catch((error) => console.log(error))
      .finally(() => useSessionStore.getState().markIsReady());
  }, []);
};
