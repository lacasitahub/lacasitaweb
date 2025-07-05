'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

type CountUpProps = {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  separator?: string;
};

export default function CountUp({
  from,
  to,
  duration = 1,
  delay = 0,
  className,
  separator = ',',
}: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      delay,
      onUpdate(value) {
        // Use toLocaleString to format with separators, then replace with custom one.
        node.textContent = Math.round(value).toLocaleString('en-US').replace(/,/g, separator);
      },
    });

    return () => controls.stop();
  }, [from, to, duration, delay, separator]);

  return <span ref={nodeRef} className={className} />;
}
