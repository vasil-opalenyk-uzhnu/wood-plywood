import axios from 'axios';

import { API_URL } from '@/shared/config';
import { getDeviceId } from '@/shared/lib/devices';

export const baseQuery = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const baseQueryWithReauth = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

baseQuery.interceptors.request.use((config) => {
  config.headers['x-device-id'] = getDeviceId();
  return config;
});
