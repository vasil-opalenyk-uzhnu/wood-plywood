import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

export const useLanguageSync = ({ languageParam, hasLocalizedParams = false }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const prevLanguageParamRef = useRef(undefined);
  const prevCurrentLanguageRef = useRef(undefined);
  const isUrlSyncInitializedRef = useRef(false);

  useEffect(() => {
    if (!languageParam) return;

    const previousLanguageParam = prevLanguageParamRef.current;
    const routeLanguageChanged = previousLanguageParam !== languageParam;

    if (previousLanguageParam !== undefined && routeLanguageChanged) {
      if (i18n.language !== languageParam) {
        void i18n.changeLanguage(languageParam);
      }
    } else if (previousLanguageParam === undefined && i18n.language !== languageParam) {
      void i18n.changeLanguage(languageParam);
    }

    prevLanguageParamRef.current = languageParam;
  }, [languageParam, i18n]);

  useEffect(() => {
    if (!languageParam || hasLocalizedParams) return;

    const previousLanguage = prevCurrentLanguageRef.current;
    const languageChanged = previousLanguage !== undefined && previousLanguage !== currentLanguage;

    if (!isUrlSyncInitializedRef.current) {
      isUrlSyncInitializedRef.current = true;
      prevCurrentLanguageRef.current = currentLanguage;
      return;
    }

    if (languageChanged && currentLanguage !== languageParam) {
      const languagePrefixRegExp = new RegExp(`^/${languageParam}(?=/|$)`);
      const pathname = location.pathname.replace(languagePrefixRegExp, `/${currentLanguage}`);

      if (pathname !== location.pathname) {
        navigate(`${pathname}${location.search}${location.hash}`, { replace: true });
      }
    }

    prevCurrentLanguageRef.current = currentLanguage;
  }, [
    languageParam,
    currentLanguage,
    hasLocalizedParams,
    location.hash,
    location.pathname,
    location.search,
    navigate,
  ]);
};
