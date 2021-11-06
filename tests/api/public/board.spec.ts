import { fetchBoard } from '@/api/public/board'

describe('fetchBoard', () => {
  it('should return board state', async () => {
    const { mid_price, bids, asks } = await fetchBoard({
      productCode: 'BTC_JPY'
    })

    expect(mid_price).toBeNumber()

    const expectPriceAmount = (value: { price: number; size: number }[]) => {
      expect(value).toBeArray()

      value.forEach(({ price, size }) => {
        expect(price).toBeNumber()
        expect(size).toBeNumber()
      })
    }

    expectPriceAmount(bids)
    expectPriceAmount(asks)
  })
})
