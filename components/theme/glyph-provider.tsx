'use client';

import { usePrimaryRGBAlpha } from '@/hooks/use-primary-rgb';

import GlyphRain from '../canvasui/GlyphRain';

export function GlyphProvider({ children }: React.PropsWithChildren) {
  const { color } = usePrimaryRGBAlpha();
  return (
    <GlyphRain headColor={color} color={color} speed={0.07} density={0.2}>
      {children}
    </GlyphRain>
  );
}
