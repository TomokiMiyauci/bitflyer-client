import { BASE_URL, TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

import type { State } from '@/shared/types'

type TickerOptions = {
  productCode: BitflyerPair
}

type TickerResponse = {
  product_code: BitflyerPair
  state: State
  timestamp: Date
  tick_id: number
  best_bid: number
  best_ask: number
  best_bid_size: number
  best_ask_size: number
  total_bid_depth: number
  total_ask_depth: number
  market_bid_size: number
  market_ask_size: number
  ltp: number
  volume: number
  volume_by_product: number
}

const reviver: Reviver = (key, value) => {
  if (key === 'timestamp' && typeof value === 'string') {
    return new Date(Date.parse(value))
  }

  return value
}

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#ticker
 * @beta
 */
const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { productCode },
  init
) => {
  const url = new URL(TICKER, BASE_URL)

  url.search = new URLSearchParams({
    product_code: productCode
  }).toString()

  return jsonFetch(url, init, { parseJson: reviver })
}

export { fetchTicker, reviver }
export type { TickerOptions, TickerResponse }
