import { useRef } from 'react';

import styles from './UserSummaryWidthChangeAvatar.module.scss';

import { useChangeAvatar } from './useChangeAvatar/useChangeAvatar.js';

import { UserSummary, UserSummarySkeleton } from '@/entities/user/ui';

import { useMe } from '@/entities/user';

import { Button } from '@/shared/ui/Button';

function UserSummaryWidthChangeAvatar() {
  const { data, isLoading } = useMe();

  const { upload, remove, isUploading, isUpdating } = useChangeAvatar();

  const inputRef = useRef(null);
  const uploading = isUploading || isUpdating;

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    upload(file);
  };

  const buttons = (
    <div className={styles.buttons}>
      <div>
        <input
          ref={inputRef}
          onChange={handleChange}
          type="file"
          accept=".jpg,.png,.webp"
          className="visible-hidden"
        />
        <Button
          variant="secondary"
          size="small"
          fullWidth
          loading={uploading}
          onClick={() => inputRef.current?.click()}
        >
          Change avatar
        </Button>
      </div>
      <Button variant="secondary" size="small" fullWidth loading={uploading} onClick={remove}>
        Remove avatar
      </Button>
    </div>
  );

  return (
    <>
      {isLoading ? (
        <UserSummarySkeleton />
      ) : (
        <UserSummary user={data.user} uploading={uploading} actions={buttons} />
      )}
    </>
  );
}

export default UserSummaryWidthChangeAvatar;
