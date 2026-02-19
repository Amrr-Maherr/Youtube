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

/**
 * Formats subscriber count to short format
 * @example "12600000" -> "12.6M subscribers"
 */
export function formatSubscriberCount(count?: string): string {
  if (!count) return "0 subscribers";
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M subscribers`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K subscribers`;
  }
  return `${num} subscribers`;
}

/**
 * Formats subscriber count to full number format
 * @example "12600000" -> "12,600,000"
 */
export function formatFullSubscriberCount(count?: string): string {
  if (!count) return "0";
  return parseInt(count).toLocaleString();
}

/**
 * Formats view count to full number format
 * @example "5646798788" -> "5,646,798,788"
 */
export function formatFullViewCount(count?: string): string {
  if (!count) return "0";
  return parseInt(count).toLocaleString();
}

/**
 * Formats video count with label
 * @example "7039" -> "7,039 videos"
 */
export function formatVideoCount(count?: string): string {
  if (!count) return "0 videos";
  return `${parseInt(count).toLocaleString()} videos`;
}

/**
 * Extracts email from channel description
 * @returns Email address or null if not found
 */
export function extractEmail(description: string): string | null {
  const emailMatch = description.match(/[\w.-]+@[\w.-]+\.\w+/);
  return emailMatch ? emailMatch[0] : null;
}

/**
 * Formats date to long format
 * @example "2011-12-15T20:08:51Z" -> "December 15, 2011"
 */
export function formatDateLong(dateString?: string): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
