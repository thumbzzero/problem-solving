function solution(n) {
  let answer = "";
  function recur(n) {
    if (n < 1) return;
    recur(Math.floor(n / 2));
    answer += n % 2;
  }
  recur(n);

  return answer;
}

console.log(solution(11)); // 1011
