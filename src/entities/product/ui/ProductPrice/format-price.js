const formatters = new Map();

export function formatPrice(value, locale, currency) {
  const key = `${locale}-${currency}`;

  if (!formatters.has(key)) {
    formatters.set(
      key,
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
      }),
    );
  }

  return formatters.get(key).format(value);
}
