import { memo, useMemo } from "react";
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

export const ChannelAbout = memo(function ChannelAbout({
  description,
  email,
  country,
  joinedDate,
  totalViews,
  fullSubscriberCount,
  videoCount,
  keywords,
}: ChannelAboutProps) {
  const keywordList = useMemo(() => {
    if (!keywords) return [];
    return keywords
      .split('"')
      .filter((_, i) => i % 2 === 1)
      .slice(0, 10);
  }, [keywords]);

  const statsData = useMemo(() => [
    { label: "Total views", value: totalViews },
    { label: "Subscribers", value: fullSubscriberCount },
    { label: "Total videos", value: videoCount },
  ], [totalViews, fullSubscriberCount, videoCount]);

  const detailsData = useMemo(() => [
    { icon: Mail, label: "Email", value: email || "Not available" },
    { icon: Globe, label: "Country", value: country || "Not available" },
    { icon: Calendar, label: "Joined", value: joinedDate },
  ], [email, country, joinedDate]);

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
            {detailsData.map((item, index) => (
              <>
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
                {index < detailsData.length - 1 && <Separator />}
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Stats</h3>
          <div className="space-y-4">
            {statsData.map((stat, index) => (
              <>
                <div key={index}>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
                {index < statsData.length - 1 && <Separator />}
              </>
            ))}
          </div>
        </div>

        {keywordList.length > 0 && (
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {keywordList.map((keyword, index) => (
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
});
