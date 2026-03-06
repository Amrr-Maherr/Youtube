import { ComponentType } from "react";
import ErrorBoundary from "react-error-boundary";

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-4 text-center">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <pre className="text-sm text-muted-foreground mt-2">{error.message}</pre>
    </div>
  );
}

export default function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
