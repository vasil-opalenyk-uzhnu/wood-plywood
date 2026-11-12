import { useGoogleOAuth } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router';

import { authByGoogleApi } from '../../../api/authByGoogleApi.js';

import { useSessionStore } from '@/entities/session';

import { toast } from '@/shared/lib/notifications';

export const useAuthByGoogle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectTo = location.state?.from
    ? `${location.state.from.pathname}${location.state.from.search}${location.state.from.hash}`
    : '/';

  const { scriptLoadedSuccessfully } = useGoogleOAuth();
  const setAccessToken = useSessionStore((state) => state.setAccessToken);

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth', 'google'],
    mutationFn: authByGoogleApi.googleLogin,
    onSuccess: (data) => {
      toast.success(data.message, { id: 'login-by-google-success' });
      setAccessToken(data.accessToken);
      navigate(redirectTo, { replace: true });
    },
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, {
        id: 'login-by-google-error',
      });
    },
  });

  const handleSuccess = async (res) => await mutate({ idToken: res.credential });
  const handleError = () => {
    toast.error('Google sign-in failed. Please try again.', {
      id: 'login-by-google-error',
    });
  };

  return {
    isReady: scriptLoadedSuccessfully,
    isPending,
    handleSuccess,
    handleError,
  };
};
