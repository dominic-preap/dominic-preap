'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';

import AsciiObject, { AsciiObjectProps } from '@/components/canvasui/AsciiObject';

export const HomeProfile = () => {
  const { theme } = useTheme();

  const props = useMemo<AsciiObjectProps>(
    () =>
      theme === 'light' ? { invert: true, environmentIntensity: 0.4 } : { invert: false, environmentIntensity: 1.2 },
    [theme]
  );

  return (
    <div className="min-h-80 md:absolute md:top-20 md:right-[-10%] md:-bottom-20 md:left-[60%]">
      <div className="relative size-full">
        <AsciiObject
          src="/images/dominic-preap.jpg"
          className="size-full"
          // ascii={false}
          cameraDistance={8}
          cellSize={6}
          fov={30}
          highlight="#000"
          exposure={1}
          floatIntensity={0.5}
          roughness={0.3}
          // ---
          {...props}
        />
      </div>
    </div>
  );
};
