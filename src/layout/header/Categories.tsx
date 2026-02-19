import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/shared/Slider";
import { FetchCategories } from "@/queries/FetchCategories";
import type { VideoCategory } from "@/types/Category";
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/Store'
import { SetCategory } from '@/store/CategorySlice'

export default function Categories() {
  const dispatch = useDispatch<AppDispatch>();
  const categoryId = useSelector((state: RootState) => state.category);
  const [selected, setSelected] = useState("All");
  const { isPending, error, data } = FetchCategories();

  useEffect(() => {
    if (data && data.length > 0) {
      setSelected(data[0].snippet.title);
    }
  }, [data]);

  if (isPending || error || !data) return null;

  const HandelCategory = (category: VideoCategory) => {
    if (category) {
      setSelected(category.snippet.title);
      dispatch(SetCategory([category.id]));
    }
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
              whitespace-nowrap rounded-lg px-3 py-1.5 h-auto font-medium text-sm cursor-pointer
              transition-colors w-fit min-w-fit
              ${
                selected === category.snippet.title
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-[var(--category-inactive)] text-white hover:bg-gray-700"
              }
            `}
            onClick={() => HandelCategory(category)}
          >
            {category.snippet.title}
          </Button>
        ))}
      </Slider>
    </div>
  );
}
