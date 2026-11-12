import { useInitializeSession } from './session/useInitializeSession.js';

export const useInitializeApp = () => {
  useInitializeSession();
};
