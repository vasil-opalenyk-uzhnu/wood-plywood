import { baseQuery } from '@/shared/api/index.js';

class AuthByGoogleApi {
  googleLogin(payload) {
    return baseQuery.post('auth/google/login', payload).then((res) => res.data);
  }
}

export const authByGoogleApi = new AuthByGoogleApi();
