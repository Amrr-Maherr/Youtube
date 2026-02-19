import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FetchSearchResults } from "@/queries/Search";
import VideoCard from "@/components/VideoCard";
import type { Video } from "@/types/Video";
import { Search } from "lucide-react";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query") || "";
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  const { data, isPending, error } = FetchSearchResults(debouncedQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (isPending && debouncedQuery) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Searching...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">Failed to load search results</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6">
      {debouncedQuery && (
        <div className="mb-6">
          <h1 className="text-xl font-semibold">
            Search results for "{debouncedQuery}"
          </h1>
          {data && (
            <p className="text-muted-foreground text-sm mt-1">
              {data.length} results
            </p>
          )}
        </div>
      )}

      {!debouncedQuery && (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <div className="flex size-20 items-center justify-center rounded-full bg-muted">
            <Search className="size-10 text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium">Search for videos</h3>
            <p className="text-muted-foreground text-sm">
              Enter a search term to find videos
            </p>
          </div>
        </div>
      )}

      {debouncedQuery && data && data.length === 0 && (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <div className="flex size-20 items-center justify-center rounded-full bg-muted">
            <Search className="size-10 text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium">No results found</h3>
            <p className="text-muted-foreground text-sm">
              Try searching for something else
            </p>
          </div>
        </div>
      )}

      {data && data.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map((item: any) => {
            const video: Video = {
              kind: "youtube#video",
              etag: item.etag,
              id: item.id.videoId,
              snippet: {
                publishedAt: item.snippet.publishedAt,
                channelId: item.snippet.channelId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnails: {
                  default: item.snippet.thumbnails.default,
                  medium: item.snippet.thumbnails.medium,
                  high: item.snippet.thumbnails.high,
                },
                channelTitle: item.snippet.channelTitle,
                categoryId: "",
                liveBroadcastContent: item.snippet.liveBroadcastContent,
                localized: {
                  title: item.snippet.title,
                  description: item.snippet.description,
                },
              },
              contentDetails: {
                duration: "",
                dimension: "2d",
                definition: "hd",
                caption: "false",
                licensedContent: false,
                contentRating: {},
                projection: "rectangular",
              },
              statistics: {
                viewCount: "0",
                likeCount: "0",
                favoriteCount: "0",
                commentCount: "0",
              },
            };

            return <VideoCard key={item.id.videoId} video={video} />;
          })}
        </div>
      )}
    </div>
  );
}
