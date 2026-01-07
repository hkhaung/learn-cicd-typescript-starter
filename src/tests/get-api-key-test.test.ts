import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("test get api key no auth header", () => {
    expect(getAPIKey({})).toBe(null);
  });
});
