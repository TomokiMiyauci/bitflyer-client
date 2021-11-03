import { BASE_URL, GETHEALTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import type { State } from '@/shared/types'

type HealthOptions = {
  productCode: BitflyerPair
}

type HealthResponse = {
  status: State
}

const fetchHealth: PublicAPI<HealthOptions, HealthResponse> = (
  { productCode },
  init
) => {
  const url = new URL(GETHEALTH, BASE_URL)

  url.search = new URLSearchParams({
    product_code: productCode
  }).toString()

  return jsonFetch(url, init)
}

export { fetchHealth }
export type { HealthOptions, HealthResponse }
