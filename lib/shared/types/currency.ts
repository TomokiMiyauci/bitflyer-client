import type { StrictExtract } from '@/utils/types'
import type {
  BTC,
  JPY,
  XRP,
  ETH,
  XLM,
  MONA,
  BCH,
  Pair
} from 'cryptocurrency-types'

type BitflyerSymbol = BTC | XRP | ETH | XLM | MONA | BCH

type BitflyerSpotPair =
  | Pair<StrictExtract<BitflyerSymbol, BTC | XRP | ETH | XLM | MONA>, JPY>
  | Pair<ETH | BCH, BTC>

type BitflyerFXPair = `FX_${BTC}_${JPY}`

// eslint-disable-next-line @typescript-eslint/ban-types
type BitflyerPair = BitflyerSpotPair | BitflyerFXPair | (string & {})

export type { BitflyerPair, BitflyerFXPair, BitflyerSpotPair }
