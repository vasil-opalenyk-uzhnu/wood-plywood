import styles from './Tabs.module.scss';
import { DEFAULT_TABS_DEFAULT_INDEX } from './config.js';
import { useId, useRef, useState } from 'react';

function Tabs(props) {
  const { label, tabs, defaultIndex = DEFAULT_TABS_DEFAULT_INDEX } = props;
  const [activeTab, setActiveTab] = useState(defaultIndex);
  const [visitedTab, setVisitedTab] = useState(() => new Set([defaultIndex]));
  const baseId = useId();
  const tabRefs = useRef([]);

  const activate = (i) => {
    setActiveTab(i);
    setVisitedTab((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
  };

  const select = (i) => {
    activate(i);
    tabRefs.current[i]?.focus();
  };

  const handleKeyDown = (e) => {
    const last = tabs.length - 1;
    const next = {
      ArrowRight: activeTab === last ? 0 : activeTab + 1,
      ArrowLeft: activeTab === 0 ? last : activeTab - 1,
      Home: 0,
      End: last,
    }[e.key];

    if (next !== undefined) {
      e.preventDefault();
      select(next);
    }
  };

  return (
    <div>
      <div role="tablist" aria-label={label} className={styles.list} onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => (tabRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={activeTab === i}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={activeTab === i ? 0 : -1}
            className={styles.tab}
            onClick={() => activate(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.label}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={activeTab !== i}
          className={styles.panel}
        >
          {visitedTab.has(i) && tab.content}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
