import { fetchTicker } from "./ticker.ts";
import type { BitflyerPair } from "./types.ts";

import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import {
  any,
  anyNumber,
  anyOf,
  anyString,
  expect,
  fetchSpy,
  test,
} from "../dev_deps.ts";

test({
  name: "fetchTicker",
  fn: async () => {
    const assert = (productCode: BitflyerPair) =>
      expect(fetchTicker({ productCode })).resolves.toEqual({
        product_code: anyString(),
        state: anyOf([
          "RUNNING",
          "CLOSED",
          "STARTING",
          "PREOPEN",
          "CIRCUIT BREAK",
          "AWAITING SQ",
          "MATURED",
        ]),
        timestamp: any(Date),
        tick_id: anyNumber(),
        best_bid: anyNumber(),
        best_ask: anyNumber(),
        best_bid_size: anyNumber(),
        best_ask_size: anyNumber(),
        total_bid_depth: anyNumber(),
        total_ask_depth: anyNumber(),
        market_bid_size: anyNumber(),
        market_ask_size: anyNumber(),
        ltp: anyNumber(),
        volume: anyNumber(),
        volume_by_product: anyNumber(),
      });

    await Promise.all(
      [...ALL_BITFLYER_SPOT_PAIRS, ...ALL_BITFLYER_FX_PAIRS].map(assert),
    );
  },
});

test({
  name: "fetch url",
  fn: async ({ fetchMock }) => {
    await fetchTicker({ productCode: "BTC_JPY" });

    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY",
    );
  },
  setup: fetchSpy,
});
