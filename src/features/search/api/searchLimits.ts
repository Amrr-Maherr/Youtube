// YouTube Data API v3 search.list accepts maxResults from 0 to 50.
export const SEARCH_MAX_RESULTS_LIMIT = 50;

export const clampSearchMaxResults = (value: number): number => {
  if (!Number.isFinite(value)) return SEARCH_MAX_RESULTS_LIMIT;
  return Math.min(Math.max(Math.trunc(value), 1), SEARCH_MAX_RESULTS_LIMIT);
};
