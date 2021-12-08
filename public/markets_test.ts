import { fetchMarkets } from "./markets.ts";
import { ALL_BITFLYER_FX_PAIRS, ALL_BITFLYER_SPOT_PAIRS } from "./constants.ts";
import {
  anyArray,
  anyOf,
  anyString,
  expect,
  fetchSpy,
  test,
} from "../dev_deps.ts";

test({
  name: "fetchMarkets",
  fn: async () => {
    await expect(fetchMarkets()).resolves.toEqual(anyArray(
      anyOf([{
        market_type: "Spot",
        product_code: anyOf(ALL_BITFLYER_SPOT_PAIRS),
      }, {
        market_type: "FX",
        product_code: anyOf(ALL_BITFLYER_FX_PAIRS),
      }, {
        market_type: "Futures",
        product_code: anyString(),
        alias: anyString(),
      }]),
    ));
  },
});

test({
  name: "fetch url",
  fn: async ({ fetchMock }) => {
    await fetchMarkets();

    expect(fetchMock.url).toBe(
      "https://api.bitflyer.com/v1/markets",
    );
  },
  setup: fetchSpy,
});
