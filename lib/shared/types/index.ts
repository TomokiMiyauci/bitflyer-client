type State =
  | 'RUNNING'
  | 'CLOSED'
  | 'STARTING'
  | 'PREOPEN'
  | 'CIRCUIT BREAK'
  | 'AWAITING SQ'
  | 'MATURED'

type Health =
  | 'NORMAL'
  | 'BUSY'
  | 'VERY BUSY'
  | 'SUPER BUSY'
  | 'NO ORDER'
  | 'STOP'

export type { State, Health }
