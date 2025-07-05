'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

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
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // Set initial value
    node.textContent = from.toLocaleString('en-US').replace(/,/g, separator);

    if (isInView) {
      const controls = animate(from, to, {
        duration,
        delay,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString('en-US').replace(/,/g, separator);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, delay, separator, isInView]);

  return <span ref={nodeRef} className={className} />;
}
