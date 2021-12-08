export type {
  BCH,
  BTC,
  ETH,
  JPY,
  MONA,
  Pair,
  XLM,
  XRP,
} from "https://deno.land/x/cc_types@v1.0.0-beta.12/mod.ts";

export { isString } from "https://deno.land/x/isx/mod.ts";
export type StrictExtract<T, U extends T> = T extends U ? T : never;
