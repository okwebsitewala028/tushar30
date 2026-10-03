'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 font-headline">Something went wrong</h2>
      <p className="text-slate-600 mb-6 max-w-md">An unexpected application error occurred. Please try again.</p>
      <Button onClick={() => reset()} className="rounded-full px-6">
        Try again
      </Button>
    </div>
  );
}
