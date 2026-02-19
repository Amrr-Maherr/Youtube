import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/shared/Slider";
import { FetchCategories } from "@/queries/FetchCategories";
import type { VideoCategory } from "@/types/Category";
import Loader from "@/components/shared/loader";

export default function Categories() {
  const [selected, setSelected] = useState("All");
  const { isPending, error, data, isLoading } = FetchCategories();
  useEffect(() => {
    setSelected("Film & Animation");
  }, [data]);
  if (isLoading || isPending) return null;
  if (error || !data) return null;
  if (isLoading) {
  return <Loader/>
}
  return (
    <div className="w-full bg-background py-5 px-2">
      <Slider
        slidesPerView={10}
        slidesPerViewMobile={8}
        spaceBetween={15}
        swiperOptions={{
          autoplay: false,
          loop: false,
        }}
        hideNavigation
      >
        {data?.map((category: VideoCategory) => (
          <Button
            key={category.id}
            variant="secondary"
            className={`
              whitespace-nowrap rounded-lg px-3 py-1.5 h-auto font-medium text-sm
              transition-colors w-fit min-w-fit
              ${
                selected === category.snippet.title
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-[var(--category-inactive)] text-white hover:bg-gray-700"
              }
            `}
            onClick={() => setSelected(category.snippet.title)}
          >
            {category.snippet.title}
          </Button>
        ))}
      </Slider>
    </div>
  );
}
