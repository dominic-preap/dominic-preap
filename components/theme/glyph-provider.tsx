'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';

import GlyphRain from '../canvasui/GlyphRain';

function hexToRgb(hex: string): [number, number, number] {
  const value = parseInt(hex.slice(1), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

export function GlyphProvider({ children }: React.PropsWithChildren) {
  const { theme } = useTheme();

  const color = useMemo(
    () => (theme === 'light' ? [0.949, 0.8745, 0.8431] : hexToRgb('#59382b')) as [number, number, number],
    [theme]
  );
  return (
    <GlyphRain headColor={color} color={color} speed={0.07} density={0.2}>
      {children}
    </GlyphRain>
  );
}
