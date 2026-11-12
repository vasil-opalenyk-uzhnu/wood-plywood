import { useUpdate } from '@/entities/user';
import { useFileUpload } from '@/entities/file';

export const useChangeAvatar = () => {
  const update = useUpdate();
  const uploader = useFileUpload();

  const upload = (file) => {
    uploader.mutate(
      { file },
      {
        onSuccess: (data) => {
          update.mutate({ profilePicture: data.file.id });
        },
      },
    );
  };

  const remove = async () => {
    update.mutate({ profilePicture: null });
  };

  return {
    upload,
    remove,
    isUploading: uploader.isPending,
    isUpdating: update.isPending,
  };
};
