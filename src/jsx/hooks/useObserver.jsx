import { useEffect, useRef, useState } from 'preact/hooks';

export const useObserver = (options = {}) => {
  const ref = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (!ref.current || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          setIsNear(true);
          observer.unobserve(entry.target); // solo una vez
        } else if (
          entry.boundingClientRect.top - window.innerHeight < 2000
        ) {
          setIsNear(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px',
        threshold: 0,
        ...options
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current, hasEntered]);

  return { ref, hasEntered, isNear };
};