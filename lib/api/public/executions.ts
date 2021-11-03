import { BASE_URL, EXECUTIONS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BitflyerPair } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

type ExecutionsOptions = {
  productCode: BitflyerPair
}

type ExecutionsResponse = {
  id: number
  side: 'BUY' | 'SELL' | ''
  price: number
  size: number
  exec_date: Date
  buy_child_order_acceptance_id: string
  sell_child_order_acceptance_id: string
}[]

const reviver: Reviver = (key, value) => {
  if (key === 'exec_date' && typeof value === 'string') {
    return new Date(Date.parse(value))
  }

  return value
}

/**
 * @throws `Error`
 *
 * @see https://lightning.bitflyer.com/docs?lang=en#execution-history
 * @beta
 */
const fetchExecutions: PublicAPI<ExecutionsOptions, ExecutionsResponse> = (
  { productCode },
  init
) => {
  const url = new URL(EXECUTIONS, BASE_URL)

  url.search = new URLSearchParams({
    product_code: productCode
  }).toString()

  return jsonFetch(url, init, { parseJson: reviver })
}

export { fetchExecutions }
export type { ExecutionsOptions, ExecutionsResponse }
