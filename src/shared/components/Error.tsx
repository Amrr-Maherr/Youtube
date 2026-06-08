import { AlertCircle } from "lucide-react";

interface ErrorProps {
  message?: string;
  description?: string;
  onRetry?: () => void;
}

export function Error({
  message = "Something went wrong",
  description = "Please try again later",
  onRetry,
}: ErrorProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-4">
      <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="size-8 text-destructive" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">{message}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-primary hover:underline"
        >
          Try again
        </button>
      )}
    </div>
  );
}
