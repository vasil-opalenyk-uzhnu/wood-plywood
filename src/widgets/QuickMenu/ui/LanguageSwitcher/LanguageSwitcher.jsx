import { useTranslation } from 'react-i18next';

import { Icon } from '@/shared/ui/Icon';
import { languageIconList } from '@/shared/config';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = async () => {
    const newLng = i18n.language === 'en' ? 'ua' : 'en';
    await i18n.changeLanguage(newLng);
  };

  return (
    <button onClick={toggleLanguage}>
      <Icon name={languageIconList[currentLanguage]} />
    </button>
  );
}

export default LanguageSwitcher;
