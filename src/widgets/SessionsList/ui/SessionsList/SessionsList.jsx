import clsx from 'clsx';
import styles from './SessionsList.module.scss';

import { RevokeOtherSessionsButton, SessionCardWithRevoke } from '@/features/revoke-session/ui';

import { useSessionList } from '@/entities/session';
import { SessionCard, SessionCardSkeleton } from '@/entities/session/ui';

function SessionsList() {
  const { data, isPending, isError } = useSessionList();

  return (
    <section className={clsx(styles.root, 'block')}>
      <h2 className="h3">Active sessions</h2>
      <p>Devices currently signed in to your account.</p>
      {isPending ? (
        <ul className={styles.list}>
          <li>
            <SessionCardSkeleton />
          </li>
          <li>
            <SessionCardSkeleton withAction />
          </li>
        </ul>
      ) : isError ? (
        <div>error</div>
      ) : (
        <>
          <ul className={styles.list}>
            {data.sessions.map((session) => (
              <li key={session.id}>
                {session.isCurrent ? (
                  <SessionCard session={session} />
                ) : (
                  <SessionCardWithRevoke session={session} />
                )}
              </li>
            ))}
          </ul>
          {data.sessions.some((session) => !session.isCurrent) && <RevokeOtherSessionsButton />}
        </>
      )}
    </section>
  );
}

export default SessionsList;
