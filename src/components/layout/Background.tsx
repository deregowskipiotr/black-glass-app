// src/components/layout/Background.tsx
import type { ReactNode } from 'react';
import { GlassContainer } from './GlassContainer';

interface BackgroundProps {
  children?: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg-main min-h-screen relative">
      {/* Everything inside GlassContainer (including Navbar) */}
      <GlassContainer>
        {children}
      </GlassContainer>
    </div>
  );
};