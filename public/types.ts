import type {
  BCH,
  BTC,
  ETH,
  JPY,
  MONA,
  Pair,
  StrictExtract,
  XLM,
  XRP,
} from "../deps.ts";

type BitflyerSymbol = BTC | XRP | ETH | XLM | MONA | BCH;

type BitflyerSpotPair =
  | Pair<StrictExtract<BitflyerSymbol, BTC | XRP | ETH | XLM | MONA>, JPY>
  | Pair<ETH | BCH, BTC>;

type BitflyerFXPair = `FX_${BTC}_${JPY}`;

type BitflyerPair = BitflyerSpotPair | BitflyerFXPair | (string & {});

type State =
  | "RUNNING"
  | "CLOSED"
  | "STARTING"
  | "PREOPEN"
  | "CIRCUIT BREAK"
  | "AWAITING SQ"
  | "MATURED";

type Health =
  | "NORMAL"
  | "BUSY"
  | "VERY BUSY"
  | "SUPER BUSY"
  | "NO ORDER"
  | "STOP";

export type { BitflyerFXPair, BitflyerPair, BitflyerSpotPair, Health, State };
