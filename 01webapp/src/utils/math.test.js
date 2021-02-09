import * as math from './math'

describe('isFibonacci', () => {
  test('should true', () => {
    expect(math.isFibonacci(1)).toBe(true)
    expect(math.isFibonacci(2)).toBe(true)
    expect(math.isFibonacci(3)).toBe(true)
    expect(math.isFibonacci(5)).toBe(true)
    expect(math.isFibonacci(8)).toBe(true)
    expect(math.isFibonacci(13)).toBe(true)
    expect(math.isFibonacci(21)).toBe(true)
    expect(math.isFibonacci(34)).toBe(true)
    expect(math.isFibonacci(55)).toBe(true)
  });

  test('should false', () => {
    expect(math.isFibonacci(4)).toBe(false)
    expect(math.isFibonacci(6)).toBe(false)
    expect(math.isFibonacci(7)).toBe(false)
    expect(math.isFibonacci(9)).toBe(false)
    expect(math.isFibonacci(10)).toBe(false)
    expect(math.isFibonacci(11)).toBe(false)
    expect(math.isFibonacci(12)).toBe(false)
    expect(math.isFibonacci(14)).toBe(false)
    expect(math.isFibonacci(15)).toBe(false)
  });
});

describe('isPrime', () => {
  test('should true', () => {
    expect(math.isPrime(2)).toBe(true)
    expect(math.isPrime(3)).toBe(true)
    expect(math.isPrime(5)).toBe(true)
    expect(math.isPrime(7)).toBe(true)
    expect(math.isPrime(11)).toBe(true)
    expect(math.isPrime(13)).toBe(true)
    expect(math.isPrime(17)).toBe(true)
    expect(math.isPrime(19)).toBe(true)
    expect(math.isPrime(23)).toBe(true)
  });

  test('should false', () => {
    expect(math.isPrime(1)).toBe(false)
    expect(math.isPrime(4)).toBe(false)
    expect(math.isPrime(6)).toBe(false)
    expect(math.isPrime(8)).toBe(false)
    expect(math.isPrime(9)).toBe(false)
    expect(math.isPrime(10)).toBe(false)
    expect(math.isPrime(12)).toBe(false)
    expect(math.isPrime(14)).toBe(false)
    expect(math.isPrime(15)).toBe(false)
  });
})