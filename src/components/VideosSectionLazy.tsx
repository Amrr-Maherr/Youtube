import { memo } from "react";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import { LazyLoad } from "@/components/shared/LazyLoad";

const LoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-7">
    {[1, 2, 3, 4, 5, 6,7,8,9,10].map((i) => (
      <div
        key={i}
        className="animate-pulse rounded-lg bg-muted aspect-video"
      />
    ))}
  </div>
));

LoadingSkeleton.displayName = "LoadingSkeleton";

interface LazyVideosSectionProps {
  children: React.ReactNode;
}

export default memo(function LazyVideosSection({ children }: LazyVideosSectionProps) {
  const { ref, isVisible } = useLazyLoad<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full">
      {isVisible ? (
        <LazyLoad fallback={<LoadingSkeleton />}>
          {children}
        </LazyLoad>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
});
