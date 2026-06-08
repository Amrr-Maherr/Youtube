import { Suspense, type ComponentType, type LazyExoticComponent } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

export function LazyLoad({
  children,
  fallback,
  errorFallback,
}: LazyLoadProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

interface UseLazyComponentOptions {
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

export function useLazyComponent<T extends ComponentType<any>>(
  lazyComponent: LazyExoticComponent<T>,
  options: UseLazyComponentOptions = {}
) {
  const {
    fallback = <div className="animate-pulse rounded-lg bg-muted" />,
    errorFallback,
  } = options;

  return {
    Component: lazyComponent,
    fallback,
    errorFallback,
  };
}

export default LazyLoad;
