'use client';

import { useState, useEffect } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
