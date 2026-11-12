import { baseQuery, baseQueryWithReauth } from '../instances.js';
import { isAxiosError } from 'axios';

const defaultReauthConfig = {
  getAccessToken: () => undefined,
  setAccessToken: () => undefined,
  onSessionLost: () => undefined,
};

let reauthConfig = defaultReauthConfig;
let inflight = null;

export const refreshAccessToken = () =>
  (inflight ??= (
    navigator.locks
      ? navigator.locks.request('auth-refresh', () => baseQuery.post('/auth/refresh'))
      : baseQuery.post('/auth/refresh')
  )
    .then(({ data }) => {
      reauthConfig.setAccessToken(data.accessToken);
      return data.accessToken;
    })
    .finally(() => (inflight = null)));

export const configureBaseQueryWithReauth = (config) => {
  reauthConfig = config;

  baseQueryWithReauth.interceptors.request.use((request) => {
    const token = reauthConfig.getAccessToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  baseQueryWithReauth.interceptors.response.use(undefined, async (error) => {
    const request = error.config;
    const code = error.response?.data?.error?.code;

    if (error.response?.status !== 401 || !request || !request._retried) throw error;

    if (code !== 'tokenExpired') {
      if (code === 'sessionRevoked' || code === 'invalidToken') reauthConfig.onSessionLost();
      throw error;
    }

    request._retried = true;

    try {
      request.headers.Authorization = `Bearer ${await refreshAccessToken()}`;
      return baseQueryWithReauth(request);
    } catch (refreshError) {
      if (isAxiosError(refreshError) && refreshError.response?.status === 401) {
        reauthConfig.onSessionLost();
      }
      throw error;
    }
  });
};
