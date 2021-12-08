import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { BitflyerPair, Health, State } from "./types.ts";

export const GETBOARDSTATE = "getboardstate";

type BoardStateOptions = {
  productCode: BitflyerPair;
};

type BoardStateResponse = {
  health: Health;
  state: State;
  data?: {
    special_quotation: number;
  };
};

function fetchBoardState(
  { productCode }: BoardStateOptions,
  init?: RequestInit,
): Promise<BoardStateResponse> {
  const url = new URL(GETBOARDSTATE, BASE_URL);

  url.searchParams.set("product_code", productCode);

  return jsonFetch(url, init);
}

export { fetchBoardState };
export type { BoardStateOptions, BoardStateResponse };
