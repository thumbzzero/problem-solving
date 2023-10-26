const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [M, N] = input.split(' ').map(Number);

function findPrimes(M, N) {
  let primes = [];
  let isPrime = new Array(N+1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i=2; i<N; i++) {
    for (let j=i; i*j<=N; j++) {
      isPrime[i*j] = false;
    }
  }

  isPrime.map((prime, index) => {
    if (prime && index >= M) primes.push(index);
  })

  return primes;
}

console.log(findPrimes(M, N).join('\n'));