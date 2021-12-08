import { fetchExecutions } from "./executions.ts";
import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import type { BitflyerPair } from "./types.ts";
import {
  any,
  anyArray,
  anyNumber,
  anyOf,
  anyString,
  expect,
  fetchSpy,
  test,
} from "../dev_deps.ts";

test({
  name: "fetchExecutions",
  fn: async () => {
    const assert = (productCode: BitflyerPair) =>
      expect(fetchExecutions({
        productCode,
      })).resolves.toEqual(anyArray({
        id: anyNumber(),
        size: anyNumber(),
        price: anyNumber(),
        side: anyOf(["BUY", "SELL", ""]),
        exec_date: any(Date),
        buy_child_order_acceptance_id: anyString(),
        sell_child_order_acceptance_id: anyString(),
      }));

    await Promise.all(
      [...ALL_BITFLYER_SPOT_PAIRS, ...ALL_BITFLYER_FX_PAIRS].map(assert),
    );
  },
});

test({
  name: "fetch url",
  fn: async ({ fetchMock }) => {
    await fetchExecutions({ productCode: "BTC_JPY" });

    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/executions?product_code=BTC_JPY",
    );
  },
  setup: fetchSpy,
});
