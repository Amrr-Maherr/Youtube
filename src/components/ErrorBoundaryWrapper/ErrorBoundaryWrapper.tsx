import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return (
    <div role="alert" className="p-4 text-center">
      <h2 className="text-lg font-semibold">Something went wrong</h2>
      <pre className="text-sm text-muted-foreground mt-2">{errorMessage}</pre>
      <button
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
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
