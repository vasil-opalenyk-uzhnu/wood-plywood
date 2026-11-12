import { baseQuery } from '@/shared/api';

class LogoutApi {
  logout() {
    return baseQuery.post('auth/logout').then((res) => res.data);
  }
}

export const logoutApi = new LogoutApi();
