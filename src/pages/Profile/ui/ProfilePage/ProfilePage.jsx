import styles from './ProfilePage.module.scss';

import { SessionsList } from '@/widgets/SessionsList';
import { Account } from '@/widgets/Account';

import { UserSummaryWidthChangeAvatar } from '@/features/change-avatar';
import { ChangeProfileForm } from '@/features/change-profile';

import { Section } from '@/shared/ui/Section';

function ProfilePage() {
  return (
    <main>
      <Section title="My Profile" description="PERSONAL INFORMATION" order="reverse">
        <div className={styles.container}>
          <UserSummaryWidthChangeAvatar />
          <div className={styles.right}>
            <ChangeProfileForm />
            <SessionsList />
            <Account />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default ProfilePage;
