import { fetchBoard } from "./board.ts";
import type { BitflyerPair } from "./types.ts";
import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import { anyArray, anyNumber, expect, fetchSpy, test } from "../dev_deps.ts";

test({
  name: "fetchBoard",
  fn: async () => {
    const priceSize = anyArray({
      price: anyNumber(),
      size: anyNumber(),
    });
    const assert = (productCode: BitflyerPair) =>
      expect(fetchBoard({ productCode })).resolves.toEqual({
        mid_price: anyNumber(),
        bids: priceSize,
        asks: priceSize,
      });

    await Promise.all(
      [...ALL_BITFLYER_SPOT_PAIRS, ...ALL_BITFLYER_FX_PAIRS].map(assert),
    );
  },
});

test({
  name: "url test",
  fn: async ({ fetchMock }) => {
    await fetchBoard({ productCode: "BTC_JPY" });
    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/board?product_code=BTC_JPY",
    );
  },
  setup: fetchSpy,
});
