import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface VideoDescriptionProps {
  views: string;
  publishedTime: string;
  duration?: string;
  description: string;
  showFull: boolean;
  onToggle: () => void;
}

export function VideoDescription({
  views,
  publishedTime,
  duration,
  description,
  showFull,
  onToggle,
}: VideoDescriptionProps) {
  return (
    <>
      <Separator className="my-4" />

      <div className="rounded-xl bg-secondary p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-medium flex-wrap">
          <span>{views}</span>
          <span>•</span>
          <span>{publishedTime}</span>
          {duration && (
            <>
              <span>•</span>
              <span>{duration}</span>
            </>
          )}
        </div>
        <div className={`text-sm text-foreground ${showFull ? "" : "line-clamp-2"}`}>
          <pre className="whitespace-pre-wrap font-sans">
            {description}
          </pre>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 h-auto p-0 text-sm font-medium"
          onClick={onToggle}
        >
          {showFull ? "Show less" : "...more"}
        </Button>
      </div>
    </>
  );
}
