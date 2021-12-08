import { fetchBoardState } from "./board_state.ts";
import type { BitflyerPair } from "./types.ts";
import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import { anyOf, expect, fetchSpy, test } from "../dev_deps.ts";

test("fetchBoardState", async () => {
  const healthList = [
    "NORMAL",
    "BUSY",
    "VERY BUSY",
    "SUPER BUSY",
    "NO ORDER",
    "STOP",
  ];
  const states = [
    "RUNNING",
    "CLOSED",
    "STARTING",
    "PREOPEN",
    "CIRCUIT BREAK",
    "AWAITING SQ",
    "MATURED",
  ];

  const assert = (productCode: BitflyerPair) =>
    expect(fetchBoardState({
      productCode,
    })).resolves.toEqual({
      health: anyOf(healthList),
      state: anyOf(states),
    });

  await Promise.all(
    [...ALL_BITFLYER_SPOT_PAIRS, ...ALL_BITFLYER_FX_PAIRS].map(assert),
  );
});

test({
  name: "fetch URL is right",
  fn: async ({ fetchMock }) => {
    await fetchBoardState({ "productCode": "BTC_JPY" });

    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/getboardstate?product_code=BTC_JPY",
    );
  },
  setup: fetchSpy,
});
