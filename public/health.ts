import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import type { BitflyerPair, Health } from "./types.ts";

export const GETHEALTH = "gethealth";

type HealthOptions = {
  productCode: BitflyerPair;
};

type HealthResponse = {
  status: Health;
};

function fetchHealth(
  { productCode }: HealthOptions,
  init?: RequestInit,
): Promise<HealthResponse> {
  const url = new URL(GETHEALTH, BASE_URL);

  url.searchParams.set("product_code", productCode);

  return jsonFetch(url, init);
}

export { fetchHealth };
export type { HealthOptions, HealthResponse };
