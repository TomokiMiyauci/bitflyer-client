import { BASE_URL, GETHEALTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

import type { Health } from '@/shared/types'

type HealthOptions = {
  productCode: BitflyerPair
}

type HealthResponse = {
  status: Health
}

const fetchHealth: PublicAPI<HealthOptions, HealthResponse> = (
  { productCode },
  init
) => {
  const url = new URL(GETHEALTH, BASE_URL)

  url.searchParams.set('product_code', productCode)

  return jsonFetch(url, init)
}

export { fetchHealth }
export type { HealthOptions, HealthResponse }
