
import React from 'react';
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 bg-background text-foreground">
      <ArrowPathRoundedSquareIcon className="h-18 w-18 text-foreground/50 animate-spin" />
      
    </div>
  );
}