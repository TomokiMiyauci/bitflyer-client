import type { BitflyerSpotPair, BitflyerFXPair } from '@/shared/types/currency'

const ALL_BITFLYER_SPOT_PAIRS: BitflyerSpotPair[] = [
  'BTC_JPY',
  'BCH_BTC',
  'ETH_BTC',
  'ETH_JPY',
  'MONA_JPY',
  'XLM_JPY',
  'XRP_JPY'
]

const ALL_BITFLYER_FX_PAIRS: BitflyerFXPair[] = ['FX_BTC_JPY']

export { ALL_BITFLYER_SPOT_PAIRS, ALL_BITFLYER_FX_PAIRS }
