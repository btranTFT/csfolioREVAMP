/**
 * useScrollSpy — returns the id of the section currently most visible
 * in the viewport, for nav active-state highlighting.
 *
 * @param {string[]} ids   - section anchor IDs to observe (without '#')
 * @param {number}   offset - top-margin offset in px (default = navHeight)
 */
import { useEffect, useState } from 'react';

export default function useScrollSpy(ids, offset = 64) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const rootMargin = `-${offset}px 0px -40% 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the first entry that is intersecting
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // among multiple visible, pick the one highest up
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin, threshold: 0 }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [JSON.stringify(ids), offset]); // eslint-disable-line

  return activeId;
}
