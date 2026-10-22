import { DEFAULT_STOCK_STATUSES } from './config.js';

export const getStatus = (quantity, lowStockThreshold) => {
  if (quantity <= 0) return DEFAULT_STOCK_STATUSES.out_of_stock;

  return quantity > lowStockThreshold
    ? DEFAULT_STOCK_STATUSES.in_stock
    : DEFAULT_STOCK_STATUSES.low_stock;
};
