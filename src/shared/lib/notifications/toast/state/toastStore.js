import { create } from 'zustand';

export const useToastStore = create((set) => ({
  toasts: [],
  add: (type, message, { id = crypto.randomUUID(), duration = 4000 } = {}) => {
    set((state) => ({
      toasts: [
        ...state.toasts.filter((toast) => toast.id !== id),
        { id, createdAt: Date.now(), type, message, duration },
      ].slice(-4),
    }));
    return id;
  },
  remove: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
  clear: () => set({ toasts: [] }),
}));
