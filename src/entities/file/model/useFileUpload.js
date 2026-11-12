import { useMutation } from '@tanstack/react-query';

import { fileApi } from '../api/fileApi.js';

import { toast } from '@/shared/lib/notifications';

export const useFileUpload = () => {
  return useMutation({
    mutationFn: (file) => fileApi.upload(file),
    onError: (e) => {
      toast.error(e.response?.data?.error?.message || e.message, { id: 'file-upload-error' });
    },
  });
};
