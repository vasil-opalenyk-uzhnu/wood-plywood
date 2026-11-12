import { useTranslation } from 'react-i18next';
import { generatePath, useParams } from 'react-router';

export const useLocalizedRoutePath = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const currentLanguage = lng || i18n.language;

  return (path, params) => {
    return generatePath(path, {
      lng: currentLanguage,
      ...(params || {}),
    });
  };
};
