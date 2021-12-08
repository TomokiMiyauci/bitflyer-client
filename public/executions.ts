import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import { isString } from "../deps.ts";
import type { BitflyerPair } from "./types.ts";

export const EXECUTIONS = "executions";

type ExecutionsOptions = {
  productCode: BitflyerPair;
};

type ExecutionsResponse = {
  id: number;
  side: "BUY" | "SELL" | "";
  price: number;
  size: number;
  exec_date: Date;
  buy_child_order_acceptance_id: string;
  sell_child_order_acceptance_id: string;
}[];

const reviver = (key: string, value: unknown) => {
  if (key === "exec_date" && isString(value)) {
    return new Date(Date.parse(value));
  }

  return value;
};

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#execution-history
 * @beta
 */
function fetchExecutions(
  { productCode }: ExecutionsOptions,
  init?: RequestInit,
): Promise<ExecutionsResponse> {
  const url = new URL(EXECUTIONS, BASE_URL);

  url.searchParams.set("product_code", productCode);

  return jsonFetch(url, init, { parseJson: reviver });
}

export { fetchExecutions };
export type { ExecutionsOptions, ExecutionsResponse };
