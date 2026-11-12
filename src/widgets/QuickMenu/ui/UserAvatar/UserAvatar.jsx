import { Link } from 'react-router';

import styles from './UserAvatar.module.scss';

import { useMe } from '@/entities/user';

import { Avatar, AvatarSkeleton } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';

import { useLocalizedRoutePath } from '@/shared/lib/routing';
import { AppRoutes, routePaths } from '@/shared/config';

function UserAvatar() {
  const getLocalizedRoutePath = useLocalizedRoutePath();
  const { data, isLoading } = useMe();
  const name = data?.user?.firstName + ' ' + data?.user?.lastName;

  return (
    <Link className={styles.root} to={getLocalizedRoutePath(routePaths[AppRoutes.PROFILE])}>
      {isLoading ? (
        <AvatarSkeleton />
      ) : !data?.user ? (
        <Icon name="profile" width={25} height={25} />
      ) : (
        <Avatar src={data?.user?.profilePicture?.url} name={name} />
      )}
    </Link>
  );
}

export default UserAvatar;
