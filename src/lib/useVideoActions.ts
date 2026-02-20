import { useState } from "react";

export function useVideoActions() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return {
    isSubscribed,
    isLiked,
    isDisliked,
    showFullDescription,
    handleSubscribe,
    handleLike,
    handleDislike,
    handleShare,
    toggleDescription,
  };
}
