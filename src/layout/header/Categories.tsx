import { useState } from "react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/shared/Slider";

const categories = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Mixes",
  "React Routers",
  "Computer programming",
  "Gadgets",
  "Podcasts",
  "Sketch comedy",
  "Recent",
  "Watched",
  "New to you",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Beauty",
  "Cooking",
  "Travel",
  "Fitness",
  "Movies",
  "TV shows",
  "Anime",
  "Comedy",
  "Music videos",
  "Tech",
  "Cars",
  "Animals",
  "Kids",
];

export default function Categories() {
  const [selected, setSelected] = useState("All");

  return (
    <div className="w-full bg-background py-5 px-2">
      <Slider
        slidesPerView={10}
        slidesPerViewMobile={8}
        spaceBetween={15}
        // className="px-4 py-3"
        swiperOptions={{
          autoplay: false,
          loop: false,
        }}
        hideNavigation
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant="secondary"
            className={`
              whitespace-nowrap rounded-lg px-3 py-1.5 h-auto font-medium text-sm
              transition-colors w-fit min-w-fit
              ${
                selected === category
                  ? "bg-white text-black hover:bg-gray-200"
                  : "dark:bg-category-inactive text-white hover:bg-gray-700"
              }
            `}
            onClick={() => setSelected(category)}
          >
            {category}
          </Button>
        ))}
      </Slider>
    </div>
  );
}
