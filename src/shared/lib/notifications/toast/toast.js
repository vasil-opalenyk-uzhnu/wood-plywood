import { useToastStore } from './state/toastStore.js';

const add = (type) => (message, options) => useToastStore.getState().add(type, message, options);

export const toast = {
  success: add('success'),
  error: add('error'),
  warning: add('warning'),
  info: add('info'),
  dismiss: (id) => useToastStore.getState().remove(id),
  clear: () => useToastStore.getState().clear(),
};
