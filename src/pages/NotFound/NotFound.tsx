import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div
        className={`max-w-lg w-full text-center transition-opacity duration-500 ease-out opacity-100`}
      >
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-48 h-48 md:w-56 md:h-56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Robot head */}
            <rect
              x="50"
              y="60"
              width="100"
              height="80"
              rx="12"
              className="fill-muted"
            />
            {/* Antenna */}
            <line
              x1="100"
              y1="60"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="4"
              className="text-muted-foreground"
            />
            <circle cx="100" cy="30" r="8" className="fill-muted-foreground" />
            {/* Eyes - X shaped for broken effect */}
            <path
              d="M70 85 L85 100 M85 85 L70 100"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-foreground"
            />
            <path
              d="M115 85 L130 100 M130 85 L115 100"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-foreground"
            />
            {/* Broken mouth */}
            <path
              d="M80 120 Q100 115 120 120"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-foreground"
            />
            {/* Crack line */}
            <path
              d="M100 60 L95 80 L105 90 L98 110"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-destructive"
            />
            {/* Spark/bolt effect */}
            <path
              d="M145 50 L155 60 L148 62 L158 72 L145 65 L138 75 L142 58 L130 65 L145 50Z"
              className="fill-yellow-500"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">
          This page isn&apos;t available
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto">
          The video may have been removed, made private, or never existed. Check
          the web address for typos or return to the homepage.
        </p>

        {/* Action Button */}
        <Link to="/">
          <Button
            size="lg"
            className="bg-[#065fd4] hover:bg-[#065fd4]/90 text-white font-medium px-8 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
