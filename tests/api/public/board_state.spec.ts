import { fetchBoardState } from '@/api/public/board_state'

describe('fetchBoardState', () => {
  it('should return board state', async () => {
    const { health, state, data } = await fetchBoardState({
      productCode: 'BTC_JPY'
    })

    expect(health).toBeOneOf([
      'NORMAL',
      'BUSY',
      'VERY BUSY',
      'SUPER BUSY',
      'NO ORDER',
      'STOP'
    ])
    expect(state).toBeOneOf([
      'RUNNING',
      'CLOSED',
      'STARTING',
      'PREOPEN',
      'CIRCUIT BREAK',
      'AWAITING SQ',
      'MATURED'
    ])

    expect(data).toEqualOneOf([undefined, expect.any(Object)])

    if (data) {
      expect(data.special_quotation).toBeNumber()
    }
  })
})
