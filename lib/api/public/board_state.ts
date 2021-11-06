import { BASE_URL, GETBOARDSTATE } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import type { State, Health } from '@/shared/types'

type BoardStateOptions = {
  productCode: BitflyerPair
}

type BoardStateResponse = {
  health: Health
  state: State
  data?: {
    special_quotation: number
  }
}

const fetchBoardState: PublicAPI<BoardStateOptions, BoardStateResponse> = (
  { productCode },
  init
) => {
  const url = new URL(GETBOARDSTATE, BASE_URL)

  url.searchParams.set('product_code', productCode)

  return jsonFetch(url, init)
}

export { fetchBoardState }
export type { BoardStateOptions, BoardStateResponse }
