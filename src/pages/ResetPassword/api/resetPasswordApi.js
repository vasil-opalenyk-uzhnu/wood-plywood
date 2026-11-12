import { baseQuery } from '@/shared/api';

class ResetPasswordApi {
  reset(payload) {
    return baseQuery.post('auth/reset/password', payload).then((res) => res.data);
  }
}

export const resetPasswordApi = new ResetPasswordApi();
