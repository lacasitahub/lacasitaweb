import { UtensilsCrossed } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="relative flex items-center justify-center">
        <UtensilsCrossed className="w-16 h-16 text-primary animate-spin" />
      </div>
      <p className="mt-4 text-lg font-semibold text-primary">Cocinando algo delicioso...</p>
    </div>
  );
}
