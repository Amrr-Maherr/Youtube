/**
 * Formats ISO 8601 duration to human-readable format
 * @example "PT3M54S" -> "3:54"
 * @example "PT1H2M30S" -> "1:02:30"
 */
export function formatDuration(duration?: string): string {
  if (!duration) return "";

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Formats view count to human-readable format
 * @example "1739901" -> "1.7M views"
 * @example "1500" -> "1.5K views"
 */
export function formatViews(views?: string): string {
  if (!views) return "0 views";

  const viewCount = parseInt(views);
  if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)}M views`;
  }
  if (viewCount >= 1000) {
    return `${(viewCount / 1000).toFixed(1)}K views`;
  }
  return `${viewCount} views`;
}

/**
 * Formats ISO date string to relative time
 * @example "2026-02-13T16:48:20Z" -> "6 days ago"
 */
export function timeAgo(dateString?: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days ago`;
  if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} months ago`;
  return `${Math.floor(seconds / 31536000)} years ago`;
}

/**
 * Gets the best quality thumbnail URL
 * Priority: maxres > standard > high > medium > default
 */
export function getThumbnailUrl(thumbnails: {
  default?: { url: string };
  medium?: { url: string };
  high?: { url: string };
  standard?: { url: string };
  maxres?: { url: string };
}): string {
  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    ""
  );
}

/**
 * Gets the channel avatar placeholder initials
 * @example "Mike WiLL Made-It" -> "M"
 */
export function getChannelInitials(channelName?: string): string {
  if (!channelName) return "?";
  return channelName.charAt(0).toUpperCase();
}
