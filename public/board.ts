import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { BitflyerPair } from "./types.ts";

export const BOARD = "board";

type BoardOptions = {
  productCode: BitflyerPair;
};

type BoardResponse = {
  mid_price: number;
  bids: { price: number; size: number }[];
  asks: { price: number; size: number }[];
};

function fetchBoard(
  { productCode }: BoardOptions,
  init?: RequestInit,
): Promise<BoardResponse> {
  const url = new URL(BOARD, BASE_URL);

  url.searchParams.set("product_code", productCode);

  return jsonFetch(url, init);
}

export { fetchBoard };
export type { BoardOptions, BoardResponse };
