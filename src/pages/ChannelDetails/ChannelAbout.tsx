import { Mail, Globe, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ChannelAboutProps {
  description: string;
  email: string | null;
  country: string;
  joinedDate: string;
  totalViews: string;
  fullSubscriberCount: string;
  videoCount: string;
  keywords?: string;
}

export function ChannelAbout({
  description,
  email,
  country,
  joinedDate,
  totalViews,
  fullSubscriberCount,
  videoCount,
  keywords,
}: ChannelAboutProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Description</h3>
          <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
            {description || "No description available."}
          </pre>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Channel details</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  {email || "Not available"}
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-3">
              <Globe className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Country</p>
                <p className="text-muted-foreground">
                  {country || "Not available"}
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-3">
              <Calendar className="size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Joined</p>
                <p className="text-muted-foreground">
                  {joinedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Stats</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Total views</p>
              <p className="text-2xl font-semibold">{totalViews}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Subscribers</p>
              <p className="text-2xl font-semibold">{fullSubscriberCount}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">Total videos</p>
              <p className="text-2xl font-semibold">{videoCount}</p>
            </div>
          </div>
        </div>

        {keywords && (
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywords
                .split('"')
                .filter((_, i) => i % 2 === 1)
                .slice(0, 10)
                .map((keyword, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary px-3 py-1 text-xs"
                  >
                    {keyword}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
