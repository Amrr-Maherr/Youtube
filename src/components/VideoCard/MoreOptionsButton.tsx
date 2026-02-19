import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoreOptionsButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export function MoreOptionsButton({ onClick, className }: MoreOptionsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "opacity-0 transition-opacity group-hover:opacity-100 p-1 hover:bg-accent rounded-full shrink-0",
        className
      )}
      aria-label="More options"
    >
      <MoreVertical className="size-4 text-foreground" />
    </button>
  );
}
