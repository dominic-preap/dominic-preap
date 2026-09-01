'use client';

import FlameWrap from '@/components/canvasui/FlameWrap';
import { usePrimaryRGB } from '@/hooks/use-primary-rgb';

export const HomeNotification = () => {
  const { color } = usePrimaryRGB();

  return (
    <FlameWrap height={40} radius={999} color={color}>
      <div className="flex w-fit items-center gap-3 px-4 py-3 text-xs tracking-widest uppercase">
        <span className="relative flex size-2">
          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-primary/80 relative inline-flex size-2 rounded-full"></span>
        </span>
        <span>available for work {/* — remote */}</span>
      </div>
    </FlameWrap>
  );
};
