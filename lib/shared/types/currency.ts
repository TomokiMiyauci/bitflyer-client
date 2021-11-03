import type { StrictExtract } from '@/utils/types'
import type { All_Pairs, BTC, JPY } from 'cryptocurrency-types'

type BitflyerSpotPair = StrictExtract<
  All_Pairs,
  | 'BTC_JPY'
  | 'XRP_JPY'
  | 'ETH_JPY'
  | 'XLM_JPY'
  | 'MONA_JPY'
  | 'ETH_BTC'
  | 'BCH_BTC'
>

type BitflyerFXPair = `FX_${BTC}_${JPY}`

// eslint-disable-next-line @typescript-eslint/ban-types
type BitflyerPair = BitflyerSpotPair | BitflyerFXPair | (string & {})

export type { BitflyerPair, BitflyerFXPair, BitflyerSpotPair }
