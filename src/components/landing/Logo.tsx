import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("flex items-center gap-2 text-2xl font-bold text-primary", className)}>
      <Image src="/logo.png" alt="La Casita Logo" width={36} height={36} />
      <span className="font-bold" style={{fontFamily: "'PT Sans', sans-serif"}}>La Casita</span>
    </a>
  );
}
