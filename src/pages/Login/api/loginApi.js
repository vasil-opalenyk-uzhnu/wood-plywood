import { baseQuery } from '@/shared/api';

class LoginApi {
  login(payload) {
    return baseQuery.post('auth/email/login', payload).then((res) => res.data);
  }
}

export const loginApi = new LoginApi();
