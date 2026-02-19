export interface ChannelThumbnails {
  default: {
    url: string;
    width: number;
    height: number;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  high: {
    url: string;
    width: number;
    height: number;
  };
}

export interface ChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: ChannelThumbnails;
  localized: {
    title: string;
    description: string;
  };
  country: string;
}

export interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface ChannelBrandingSettings {
  channel: {
    title: string;
    description: string;
    keywords: string;
    trackingAnalyticsAccountId?: string;
    country: string;
  };
  image: {
    bannerExternalUrl: string;
  };
}

export interface Channel {
  kind: string;
  etag: string;
  id: string;
  snippet: ChannelSnippet;
  statistics: ChannelStatistics;
  brandingSettings?: ChannelBrandingSettings;
}

export interface ChannelListResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Channel[];
}
