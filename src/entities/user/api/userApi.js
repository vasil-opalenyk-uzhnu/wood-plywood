import { baseQueryWithReauth } from '@/shared/api';

class UserApi {
  me() {
    return baseQueryWithReauth.get('auth/me').then((res) => res.data);
  }
  update(payload) {
    return baseQueryWithReauth.post('users/update-me', payload).then((res) => res.data);
  }
}

export const userApi = new UserApi();
