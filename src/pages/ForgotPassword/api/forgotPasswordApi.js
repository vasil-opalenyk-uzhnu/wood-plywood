import { baseQuery } from '@/shared/api/index.js';

class ForgotPasswordApi {
  forgot(payload) {
    return baseQuery.post('auth/forgot/password', payload).then((res) => res.data);
  }
}

export const forgotPasswordApi = new ForgotPasswordApi();
