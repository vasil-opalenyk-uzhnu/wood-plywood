import styles from './ThemeSwitcher.module.scss';

import { useTheme, Theme } from '@/shared/lib/theme';

import { Icon } from '@/shared/ui/Icon/index.js';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.root}
      aria-label="Toggle theme"
      onClick={() => toggleTheme()}
    >
      {theme === Theme.dark ? (
        <Icon name="sun" width={20} height={20} />
      ) : (
        <Icon name="moon" width={20} height={20} />
      )}
    </button>
  );
}

export default ThemeSwitcher;
