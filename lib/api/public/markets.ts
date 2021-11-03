import { BASE_URL, MARKETS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerSpotPair, BitflyerFXPair } from '@/shared/types/currency'
import type { SimplePublicAPI } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type MarketsOptions = {}

type MarketsResponse = (
  | {
      product_code: BitflyerSpotPair
      market_type: 'Spot'
    }
  | {
      product_code: BitflyerFXPair
      market_type: 'FX'
    }
  | {
      product_code: string
      alias: string
      market_type: 'Futures'
    }
)[]

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#market-list
 * @beta
 */
const fetchMarkets: SimplePublicAPI<MarketsOptions, MarketsResponse> = (
  _,
  init
) => {
  const url = new URL(MARKETS, BASE_URL)

  return jsonFetch(url, init)
}

export { fetchMarkets }
