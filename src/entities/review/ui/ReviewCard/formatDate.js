const formatters = new Map();

export function formatDate(value, locale) {
  if (!formatters.has(locale)) {
    formatters.set(
      locale,
      new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    );
  }

  return formatters.get(locale).format(new Date(value));
}
