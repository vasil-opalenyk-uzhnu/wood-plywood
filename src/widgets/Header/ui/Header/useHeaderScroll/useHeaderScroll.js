import { useEffect, useRef } from 'react';

export const useHeaderScroll = (threshold = 20) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrolled = null;

    const update = () => {
      const next = window.scrollY > threshold;
      if (next === scrolled) return;
      scrolled = next;
      el.dataset.scrolled = String(next);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return ref;
};
