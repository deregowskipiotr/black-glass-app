// src/components/layout/GlassContainer.tsx
import type { ReactNode } from 'react';

interface GlassContainerProps {
  children: ReactNode;
}

export const GlassContainer = ({ children }: GlassContainerProps) => {
  return (
    <div className="min-h-screen flex items-start justify-center">
      {/* Glass container - 80% width on large screens, wider on mobile */}
      <div className="
        w-full 
        md:w-4/5 
        min-h-screen
        bg-black/20
        backdrop-blur-[5px]
        shadow-2xl
        mx-auto
      ">
        {/* Content wrapper */}
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};