import type { BitflyerFXPair, BitflyerSpotPair } from "./types.ts";
export const BASE_URL = "https://api.bitflyer.com/v1/";

export const ALL_BITFLYER_SPOT_PAIRS: BitflyerSpotPair[] = [
  "BTC_JPY",
  "BCH_BTC",
  "ETH_BTC",
  "ETH_JPY",
  "MONA_JPY",
  "XLM_JPY",
  "XRP_JPY",
];

export const ALL_BITFLYER_FX_PAIRS: BitflyerFXPair[] = ["FX_BTC_JPY"];
