function factorial(r) {
  let answer = 1;
  while (r > 0) answer *= r--;
  return answer;
}

function combination(n, r) {
  if (r === 0) return 1;
  if (r === n) return 1;
  nPr = 1;
  rFactorial = factorial(r);
  while (r > 0) {
    nPr *= n;
    n--;
    r--;
  }
  return Math.floor(nPr / rFactorial);
}

function solution(n) {  // n: 돌의 개수
  let answer = 0;

  let sum = n + 1;
  let one = 0;
  let two = Math.floor(sum / 2);

  while (two >= 0) {
    one = sum - 2 * two;
    answer += combination(one + two, two);
    two -= 1;
  }

  return answer; // 개울을 건너는 방법의 수
}

function solutionUsingDP(n) {
  let cache = [1, 1];
  while (cache.length <= n + 1) {
    cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
  }
  return cache[n + 1];
}
