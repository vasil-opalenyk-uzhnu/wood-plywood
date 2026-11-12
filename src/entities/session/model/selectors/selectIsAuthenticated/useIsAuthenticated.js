import { useSessionStore } from '../../sessionStore/sessionStore.js';

export const useIsAuthenticated = () => useSessionStore((state) => Boolean(state.accessToken));
