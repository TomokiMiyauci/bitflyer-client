import { fetchExecutions } from '@/api/public/executions'

describe('fetchExecutions', () => {
  it('should return execution list', async () => {
    const result = await fetchExecutions({
      productCode: 'BTC_JPY'
    })

    expect(result).toBeArray()

    result.forEach(
      ({
        id,
        size,
        price,
        side,
        exec_date,
        buy_child_order_acceptance_id,
        sell_child_order_acceptance_id
      }) => {
        expect(id).toBeNumber()
        expect(size).toBeNumber()
        expect(price).toBeNumber()
        expect(side).toBeOneOf(['BUY', 'SELL', ''])
        expect(exec_date).toBeAfter(new Date('2000/1/1'))
        expect(buy_child_order_acceptance_id).toBeString()
        expect(sell_child_order_acceptance_id).toBeString()
      }
    )
  })
})
