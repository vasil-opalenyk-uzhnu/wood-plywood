export const getFallbackLanguage = (instance) => {
  const fallback = instance.options.lng;

  if (typeof fallback === 'string') {
    return fallback;
  }

  return instance.language;
};
