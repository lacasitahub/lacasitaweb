import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex items-center gap-2 text-2xl font-bold text-primary", className)}>
      <Leaf className="h-7 w-7" />
      <span className="font-headline">La Casita</span>
    </a>
  );
}
