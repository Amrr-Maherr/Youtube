export type VideoCategory = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    assignable: boolean;
    channelId: string;
  };
}

export type CategoriesResponse = {
  kind: string;
  etag: string;
  items: VideoCategory[];
}
