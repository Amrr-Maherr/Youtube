import { test } from "node:test";
import assert from "node:assert/strict";
import {
  SEARCH_MAX_RESULTS_LIMIT,
  clampSearchMaxResults,
} from "../src/features/search/api/searchLimits.ts";

test("limit matches the YouTube API maximum of 50", () => {
  assert.equal(SEARCH_MAX_RESULTS_LIMIT, 50);
});

test("clamps values to the range 1-50", () => {
  assert.equal(clampSearchMaxResults(100), 50);
  assert.equal(clampSearchMaxResults(50), 50);
  assert.equal(clampSearchMaxResults(10), 10);
  assert.equal(clampSearchMaxResults(0), 1);
  assert.equal(clampSearchMaxResults(-5), 1);
  assert.equal(clampSearchMaxResults(Number.NaN), 50);
});
