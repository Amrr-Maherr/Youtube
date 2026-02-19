import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import { Label } from "../../components/ui/label"
import { Button } from "../../components/ui/button"
import { Separator } from "../../components/ui/separator"
import { ImagePlus, X } from "lucide-react"
import { cn } from "../../lib/utils"

export default function SendFeedback() {
  const [feedback, setFeedback] = useState("")
  const [includeSystemInfo, setIncludeSystemInfo] = useState(true)
  const [hasScreenshot, setHasScreenshot] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI only - no actual submission
  }

  const handleCancel = () => {
    setFeedback("")
    setIncludeSystemInfo(true)
    setHasScreenshot(false)
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Send feedback</h1>
          <p className="text-muted-foreground text-sm">
            Help us improve by sharing your thoughts and suggestions
          </p>
        </div>

        <Separator className="my-6" />

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Your feedback</CardTitle>
              <CardDescription>
                Tell us what you think or report an issue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Textarea */}
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Describe your feedback or issue..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[150px] resize-y"
                />
              </div>

              {/* Screenshot Upload Area */}
              <div className="space-y-2">
                <Label>Screenshots (optional)</Label>
                {!hasScreenshot ? (
                  <button
                    type="button"
                    onClick={() => setHasScreenshot(true)}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-md border border-dashed p-6 text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <ImagePlus className="size-5" />
                    <span>Add a screenshot</span>
                  </button>
                ) : (
                  <div className="relative inline-block">
                    <div className="flex h-24 w-32 items-center justify-center rounded-md border bg-muted">
                      <ImagePlus className="size-6 text-muted-foreground" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setHasScreenshot(false)}
                      className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-sm transition-colors hover:bg-destructive/90"
                    >
                      <X className="size-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* System Info Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="system-info"
                  checked={includeSystemInfo}
                  onCheckedChange={(checked) =>
                    setIncludeSystemInfo(checked as boolean)
                  }
                />
                <Label
                  htmlFor="system-info"
                  className="text-sm font-normal text-muted-foreground cursor-pointer"
                >
                  Include system information to help diagnose issues
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Button type="button" variant="ghost" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" variant="default">
                Submit feedback
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </main>
  )
}
