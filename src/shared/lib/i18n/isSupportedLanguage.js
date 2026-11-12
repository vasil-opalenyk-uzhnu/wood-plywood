import { supportedLngs } from '@/shared/config';

export const isSupportedLanguage = (language) => {
  if (!language) return false;

  return supportedLngs.some((lng) => lng === language);
};
