import { BASE_URL, BOARD } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

type BoardOptions = {
  productCode: BitflyerPair
}

type BoardResponse = {
  mid_price: number
  bids: { price: number; size: number }[]
  asks: { price: number; size: number }[]
}

const fetchBoard: PublicAPI<BoardOptions, BoardResponse> = (
  { productCode },
  init
) => {
  const url = new URL(BOARD, BASE_URL)

  url.searchParams.set('product_code', productCode)

  return jsonFetch(url, init)
}

export { fetchBoard }
export type { BoardOptions, BoardResponse }
