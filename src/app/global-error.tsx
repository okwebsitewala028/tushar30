'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-50 text-slate-900 font-sans">
        <h2 className="text-3xl font-bold mb-4">Application Error</h2>
        <p className="text-slate-600 mb-6 max-w-md text-center">
          A critical error occurred while loading the application.
        </p>
        <Button onClick={() => reset()} className="rounded-full px-6">
          Try again
        </Button>
      </body>
    </html>
  );
}
