import { fetchTicker } from '@/api/public/ticker'

describe('fetchTicker', () => {
  it('should return ticker', async () => {
    const result = await fetchTicker({ productCode: 'BTC_JPY' })

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

    expect(product_code).toBeString()
    expect(state).toBeOneOf([
      'RUNNING',
      'CLOSED',
      'STARTING',
      'PREOPEN',
      'CIRCUIT BREAK',
      'AWAITING SQ',
      'MATURED'
    ])
    expect(timestamp).toBeAfter(new Date('2000/1/1'))
    expect(tick_id).toBeNumber()
    expect(best_bid).toBeNumber()
    expect(best_ask).toBeNumber()
    expect(best_bid_size).toBeNumber()
    expect(best_ask_size).toBeNumber()
    expect(total_bid_depth).toBeNumber()
    expect(total_ask_depth).toBeNumber()
    expect(market_bid_size).toBeNumber()
    expect(market_ask_size).toBeNumber()
    expect(ltp).toBeNumber()
    expect(volume).toBeNumber()
    expect(volume_by_product).toBeNumber()
  })
})
