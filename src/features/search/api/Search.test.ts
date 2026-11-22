import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { SearchVideos, clampSearchMaxResults } from "./Search";

vi.mock("axios");

describe("search maxResults limit", () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockResolvedValue({ data: { items: [] } });
  });

  it("clamps values to the YouTube API range 1-50", () => {
    expect(clampSearchMaxResults(100)).toBe(50);
    expect(clampSearchMaxResults(50)).toBe(50);
    expect(clampSearchMaxResults(10)).toBe(10);
    expect(clampSearchMaxResults(0)).toBe(1);
    expect(clampSearchMaxResults(-5)).toBe(1);
    expect(clampSearchMaxResults(Number.NaN)).toBe(50);
  });

  it("requests at most 50 results by default", async () => {
    await SearchVideos("react");
    const url = vi.mocked(axios.get).mock.calls[0][0] as string;
    expect(url).toContain("maxResults=50&");
  });

  it("clamps an oversized explicit value", async () => {
    await SearchVideos("react", 100);
    const url = vi.mocked(axios.get).mock.calls[0][0] as string;
    expect(url).toContain("maxResults=50&");
  });

  it("does not call the API for an empty query", async () => {
    expect(await SearchVideos("   ")).toEqual([]);
    expect(axios.get).not.toHaveBeenCalled();
  });
});
