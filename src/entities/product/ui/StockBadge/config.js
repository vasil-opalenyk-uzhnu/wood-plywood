export const DEFAULT_STOCK_THRESHOLD = 3;
export const DEFAULT_STOCK_VARIANT = 'base';
export const DEFAULT_STOCK_STATUSES = {
  in_stock: {
    label: 'In stock',
    colorClass: 'var(--feedback-success-fg)',
  },
  low_stock: {
    label: 'Low stock',
    colorClass: 'var(--feedback-warning-fg)',
  },
  out_of_stock: {
    label: 'Out of stock',
    colorClass: 'var(--feedback-error-fg)',
  },
};
