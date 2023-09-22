let cache = [];

// f(n) = f(n-1) + f(n-2)
function recur(n) {
  if (cache[n] !== -1) return cache[n];
  cache[n] = recur(n - 1) + recur(n - 2);
  return cache[n];
}

function solution(n) {
  cache = new Array(n + 1).fill(-1);
  cache[0] = 1;
  cache[1] = 1;
  return recur(n);
}
