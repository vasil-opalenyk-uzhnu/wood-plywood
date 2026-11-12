import { baseQuery } from '@/shared/api/index.js';

class RegisterApi {
  register(payload) {
    return baseQuery.post('auth/email/register', payload).then((res) => res.data);
  }
}

export const registerApi = new RegisterApi();
