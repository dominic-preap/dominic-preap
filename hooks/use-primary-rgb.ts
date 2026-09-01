'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';

export function hexToRgb(hex: string): [number, number, number] {
  const value = parseInt(hex.slice(1), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

export const usePrimaryRGBAlpha = () => {
  const { theme } = useTheme();

  const color = useMemo(
    () => (theme === 'light' ? [0.949, 0.8745, 0.8431] : hexToRgb('#59382b')) as [number, number, number],
    [theme]
  );

  return { color };
};

export const usePrimaryRGB = () => {
  const { theme } = useTheme();

  const color = useMemo(
    () => (theme === 'light' ? hexToRgb('#b5613c') : hexToRgb('#c97e5d')) as [number, number, number],
    [theme]
  );

  return { color };
};
