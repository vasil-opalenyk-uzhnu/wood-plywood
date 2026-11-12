import { baseQueryWithReauth } from '@/shared/api/index.js';

class FileApi {
  upload(payload) {
    const formData = new FormData();
    formData.append('file', payload.file);

    return baseQueryWithReauth.post('files', formData).then((res) => res.data);
  }
}

export const fileApi = new FileApi();
