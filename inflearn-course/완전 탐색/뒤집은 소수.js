function findPrimes(max) {
  let isPrime = new Array(max + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  let p = 2;
  while (p * p <= max) {
    for (let i = 0; i < max; i++) {
      if (isPrime[i]) {
        let j = 2;
        while (p * j <= max) {
          isPrime[p * j] = false;
          j++;
        }
      }
    }
    p++;
  }
  return isPrime;
}

function solution(arr) {
  let answer = [];
  arr = arr.map((num) => String(num).split("").reverse().join("")).map(Number);

  let isPrime = findPrimes(Math.max(...arr));

  arr.map((num) => {
    if (isPrime[num]) answer.push(num);
  });
  return answer;
}
