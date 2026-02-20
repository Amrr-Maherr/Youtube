import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Video } from "@/types/Video";
import { formatViews } from "@/lib/video";
import { FetchShorts } from "@/queries/Shorts";
import Loader from "@/components/shared/loader";
import { Error } from "@/components/shared/Error";
import ShortCard from "@/components/ShortCard";

export default function Shorts() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const { data: shorts, isLoading, error } = FetchShorts(100);

  const handleShortClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`);
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "music", label: "Music" },
    { id: "gaming", label: "Gaming" },
    { id: "comedy", label: "Comedy" },
    { id: "sports", label: "Sports" },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error || !shorts || shorts.length === 0) {
    return (
      <Error
        message="No shorts available"
        description="Please try again later"
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-14 z-10 bg-background/95 backdrop-blur border-b px-4 sm:px-6 py-3">

        {/* Category Filter */}
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-thin">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="rounded-full whitespace-nowrap shrink-0"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full px-4 sm:px-6 py-6">
        {/* Shorts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {shorts.map((short: Video) => (
            <ShortCard
              key={short.id}
              short={short}
              onClick={handleShortClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
