import { FileWarning } from "lucide-react"
import {
  Card,
  CardContent,
} from "../../components/ui/card"
import { Separator } from "../../components/ui/separator"

export default function ReportHistory() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Report history</h1>
          <p className="text-muted-foreground text-sm">
            View and manage your submitted reports
          </p>
        </div>

        <Separator className="my-6" />

        <Card className="border-dashed">
          <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <FileWarning className="size-8 text-muted-foreground" />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-medium">No reports yet</h3>
              <p className="text-muted-foreground text-sm">
                When you submit reports, they will appear here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
