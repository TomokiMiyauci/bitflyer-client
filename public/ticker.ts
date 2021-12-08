import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { BitflyerPair, State } from "./types.ts";
import { isString } from "../deps.ts";

export const TICKER = "ticker";

type TickerOptions = {
  productCode: BitflyerPair;
};

type TickerResponse = {
  product_code: BitflyerPair;
  state: State;
  timestamp: Date;
  tick_id: number;
  best_bid: number;
  best_ask: number;
  best_bid_size: number;
  best_ask_size: number;
  total_bid_depth: number;
  total_ask_depth: number;
  market_bid_size: number;
  market_ask_size: number;
  ltp: number;
  volume: number;
  volume_by_product: number;
};

function reviver(key: string, value: unknown): unknown {
  if (key === "timestamp" && isString(value)) {
    return new Date(Date.parse(value));
  }

  return value;
}

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#ticker
 * @beta
 */
function fetchTicker(
  { productCode }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(TICKER, BASE_URL);

  url.searchParams.set("product_code", productCode);

  return jsonFetch(url, init, { parseJson: reviver });
}

export { fetchTicker, reviver };
export type { TickerOptions, TickerResponse };
