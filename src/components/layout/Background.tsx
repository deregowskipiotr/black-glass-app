// src/components/layout/Background.tsx
import type { ReactNode } from 'react';
import { GlassContainer } from './GlassContainer';
import React from 'react';

interface BackgroundProps {
  children?: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  // We need to split children into:
  // 1. Navbar (first child) - goes outside GlassContainer
  // 2. Rest of content - goes inside GlassContainer
  
  const childrenArray = React.Children.toArray(children);
  const navbar = childrenArray[0]; // First child is Navbar
  const content = childrenArray.slice(1); // Rest goes into GlassContainer

  return (
    <div className="bg-main min-h-screen relative">
      {/* Navbar outside GlassContainer */}
      {navbar}
      
      {/* Everything else inside GlassContainer */}
      <GlassContainer>
        {content}
      </GlassContainer>
    </div>
  );
};