import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 text-2xl font-bold text-primary", className)}>
      <Image src="/logo.png" alt="La Casita Logo" width={46} height={56} data-ai-hint="logo" />
      <span className="font-bold" style={{fontFamily: "'PT Sans', sans-serif"}}>La Casita</span>
    </Link>
  );
}
