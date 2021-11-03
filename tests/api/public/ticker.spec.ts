import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should return ticker', async () => {
    const result = await fetchTicker({ productCode: 'BTC_JPY' })

    const fields = [
      'product_code',
      'state',
      'timestamp',
      'tick_id',
      'best_bid',
      'best_ask',
      'best_bid_size',
      'best_ask_size',
      'total_bid_depth',
      'total_ask_depth',
      'market_bid_size',
      'market_ask_size',
      'ltp',
      'volume',
      'volume_by_product'
    ]

    const keys = Object.keys(result)

    fields.forEach((field) => {
      expect(keys).toContain(field)
    })

    expect(keys).toHaveLength(fields.length)

    const {
      product_code,
      state,
      timestamp,
      tick_id,
      best_bid,
      best_ask,
      best_bid_size,
      best_ask_size,
      total_bid_depth,
      total_ask_depth,
      market_bid_size,
      market_ask_size,
      ltp,
      volume,
      volume_by_product
    } = result

    expect(product_code).toEqual(expect.any(String))
    expect(state).toMatch(
      /RUNNING|CLOSED|STARTING|PREOPEN|CIRCUIT BREAK|AWAITING SQ|MATURED/
    )
    expect(timestamp).toEqual(expect.any(Date))
    expect(tick_id).toEqual(expect.any(Number))
    expect(best_bid).toEqual(expect.any(Number))
    expect(best_ask).toEqual(expect.any(Number))
    expect(best_bid_size).toEqual(expect.any(Number))
    expect(best_ask_size).toEqual(expect.any(Number))
    expect(total_bid_depth).toEqual(expect.any(Number))
    expect(total_ask_depth).toEqual(expect.any(Number))
    expect(market_bid_size).toEqual(expect.any(Number))
    expect(market_ask_size).toEqual(expect.any(Number))
    expect(ltp).toEqual(expect.any(Number))
    expect(volume).toEqual(expect.any(Number))
    expect(volume_by_product).toEqual(expect.any(Number))
  })
})
