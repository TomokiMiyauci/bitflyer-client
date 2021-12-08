import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { BitflyerFXPair, BitflyerSpotPair } from "./types.ts";

export const MARKETS = "markets";

type MarketsOptions = {};

type MarketsResponse = (
  | {
    product_code: BitflyerSpotPair;
    market_type: "Spot";
  }
  | {
    product_code: BitflyerFXPair;
    market_type: "FX";
  }
  | {
    product_code: string;
    alias: string;
    market_type: "Futures";
  }
)[];

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#market-list
 * @beta
 */
function fetchMarkets(
  _?: MarketsOptions,
  init?: RequestInit,
): Promise<MarketsResponse> {
  const url = new URL(MARKETS, BASE_URL);

  return jsonFetch(url, init);
}

export { fetchMarkets };
export type { MarketsResponse };
