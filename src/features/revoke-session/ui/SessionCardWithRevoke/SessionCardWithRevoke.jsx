import RevokeSessionButton from '../RevokeSessionButton/RevokeSessionButton.jsx';

import { SessionCard } from '@/entities/session/ui';

function SessionCardWithRevoke({ session }) {
  return <SessionCard session={session} action={<RevokeSessionButton session={session} />} />;
}

export default SessionCardWithRevoke;
