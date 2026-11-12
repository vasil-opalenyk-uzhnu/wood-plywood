import { baseQueryWithReauth } from '@/shared/api/index.js';

class SessionApi {
  list() {
    return baseQueryWithReauth.get('sessions').then((res) => res.data);
  }
  revoke(id) {
    return baseQueryWithReauth.delete(`sessions/${id}`).then((res) => res.data);
  }
  revokeOthers() {
    return baseQueryWithReauth.delete(`sessions`).then((res) => res.data);
  }
}

export const sessionApi = new SessionApi();
