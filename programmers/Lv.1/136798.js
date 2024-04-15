function getWeight(n, limit, power) {
  let count = 1;
  for (let i=1; i<=n/2; i++) {
    if (n%i === 0) count++;
    if (count > limit) return power;
  }
  return count;
}

function sum(ary) {
  return ary.reduce((total, current) => {
    return total + current
  }, 0);
}

function solution(number, limit, power) {
  let iron = [];
  
  for (let i=1; i<=number; i++) {
    iron.push(getWeight(i, limit, power));
  }
  
  return sum(iron);
}