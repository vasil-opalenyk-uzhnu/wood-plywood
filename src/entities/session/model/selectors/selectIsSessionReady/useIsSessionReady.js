import { useSessionStore } from '../../sessionStore/sessionStore.js';

export const useIsSessionReady = () => useSessionStore((state) => Boolean(state.isSessionReady));
