import { baseQuery } from '@/shared/api/index.js';

class VerifyEmailApi {
  verify(payload) {
    return baseQuery.post('auth/email/verify-email', payload).then((res) => res.data);
  }
}

export const verifyEmailApi = new VerifyEmailApi();
