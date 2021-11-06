import { fetchMarkets } from '@/api/public/markets'
import {
  ALL_BITFLYER_SPOT_PAIRS,
  ALL_BITFLYER_FX_PAIRS
} from '@/constants/pair'

describe('fetchMarkets', () => {
  it('should return market info', async () => {
    const result = await fetchMarkets()

    expect(result).toBeArray()

    result.forEach((value) => {
      expect(value.market_type).toBeOneOf(['Spot', 'FX', 'Futures'])
      expect(value.product_code).toBeString()

      if (value.market_type === 'Spot') {
        expect(ALL_BITFLYER_SPOT_PAIRS).toContain(value.product_code)
      } else if (value.market_type === 'FX') {
        expect(ALL_BITFLYER_FX_PAIRS).toContain(value.product_code)
      } else if (value.market_type === 'Futures') {
        expect(value.alias).toBeString()
      }
    })
  })
})
