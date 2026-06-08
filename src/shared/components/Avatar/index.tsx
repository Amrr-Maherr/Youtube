import { User } from "lucide-react";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({
  src,
  alt = "User",
  size = "md",
  className = "",
}: AvatarProps) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-32",
    xl: "size-40",
  };

  const iconSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-16",
    xl: "size-20",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <User className={`${iconSizes[size]} text-gray-400`} />
    </div>
  );
}
