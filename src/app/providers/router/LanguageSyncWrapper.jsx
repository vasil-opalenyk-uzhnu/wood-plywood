import { useParams } from 'react-router';
import { useLanguageSync } from '@/shared/lib/routing';

function LanguageSyncWrapper({ children, hasLocalizedParams = false }) {
  const { lng } = useParams();
  useLanguageSync({ languageParam: lng, hasLocalizedParams });

  return <>{children}</>;
}

export default LanguageSyncWrapper;
