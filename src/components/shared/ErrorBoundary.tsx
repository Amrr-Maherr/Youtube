import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  public resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex h-full w-full min-h-[400px] flex-col items-center justify-center gap-4 p-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            {this.state.error && (
              <p className="text-muted-foreground text-sm">
                {this.state.error.message}
              </p>
            )}
          </div>
          <Button onClick={this.resetErrorBoundary}>Try again</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
