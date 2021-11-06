import { fetchHealth } from '@/api/public/health'

describe('fetchHealth', () => {
  it('should return health state', async () => {
    const { status } = await fetchHealth({
      productCode: 'BTC_JPY'
    })

    expect(status).toBeOneOf([
      'NORMAL',
      'BUSY',
      'VERY BUSY',
      'SUPER BUSY',
      'NO ORDER',
      'STOP'
    ])
  })
})
