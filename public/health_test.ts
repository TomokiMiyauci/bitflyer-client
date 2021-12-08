import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import type { BitflyerPair } from "./types.ts";
import { anyOf, expect, fetchSpy, test } from "../dev_deps.ts";
import { fetchHealth } from "./health.ts";

test({
  name: "fetchHealth",
  fn: async () => {
    const assert = (productCode: BitflyerPair) =>
      expect(fetchHealth({
        productCode,
      })).resolves.toEqual({
        status: anyOf([
          "NORMAL",
          "BUSY",
          "VERY BUSY",
          "SUPER BUSY",
          "NO ORDER",
          "STOP",
        ]),
      });

    await Promise.all(
      [...ALL_BITFLYER_FX_PAIRS, ...ALL_BITFLYER_SPOT_PAIRS].map(assert),
    );
  },
});

test({
  name: "fetch url",
  fn: async ({ fetchMock }) => {
    await fetchHealth({ productCode: "BTC_JPY" });

    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/gethealth?product_code=BTC_JPY",
    );
  },
  setup: fetchSpy,
});
