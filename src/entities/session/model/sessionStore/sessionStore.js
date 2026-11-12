import { create } from 'zustand';

export const useSessionStore = create((set) => ({
  accessToken: undefined,
  isSessionReady: false,
  setAccessToken: (accessToken) => set({ accessToken }),
  markIsReady: () => set({ isSessionReady: true }),
  clear: () => set({ accessToken: undefined }),
}));
