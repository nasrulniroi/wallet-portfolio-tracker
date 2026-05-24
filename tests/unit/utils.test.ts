import { formatNumber, formatUSD, cn } from '@/lib/utils'

describe('utils', () => {
  test('formatNumber', () => {
    expect(formatNumber(1234567)).toBe('1,234,567')
    expect(formatNumber(0)).toBe('0')
  })
  test('formatUSD', () => {
    expect(formatUSD(99.99)).toBe('$99.99')
    expect(formatUSD(0)).toBe('$0.00')
  })
  test('cn', () => {
    expect(cn('a', 'b', false && 'c')).toBe('a b')
  })
})
