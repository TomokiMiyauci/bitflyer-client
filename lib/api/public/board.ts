import { BASE_URL, BOARD } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

type MarketsOptions = {
  productCode: BitflyerPair
}

type Lot = {
  price: number
  size: number
}

type MarketsResponse = {
  mid_price: number
  bids: Lot[]
  asks: Lot[]
}

const fetchBoard: PublicAPI<MarketsOptions, MarketsResponse> = (
  { productCode },
  init
) => {
  const url = new URL(BOARD, BASE_URL)

  url.search = new URLSearchParams({
    product_code: productCode
  }).toString()

  return jsonFetch(url, init)
}

export { fetchBoard }
