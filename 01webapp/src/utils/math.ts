export const isPrime = (n) => {
  for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false; 
  }
  return n > 1;
}

const isSquare = (n) => {
  return n > 0 && Math.sqrt(n) % 1 === 0; 
}

export const isFibonacci = (n) => {
  const base = 5 * Math.pow(n, 2)
  return isSquare(base-4) || isSquare(base+4)
}