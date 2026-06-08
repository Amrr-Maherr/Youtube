import { memo } from "react";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import { Separator } from "../../../../shared/components/ui/separator";
import { Settings2 } from "lucide-react";

export default memo(function PlaybackSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Playback and performance</h1>
        <p className="text-muted-foreground text-sm">
          Adjust playback settings and performance options
        </p>
      </div>
      <Separator />
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] items-center justify-center p-8">
          <div className="flex max-w-sm flex-col items-center gap-4 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <Settings2 className="size-6 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Coming soon</p>
              <p className="text-muted-foreground text-sm">
                This section is under development and will be available soon.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
