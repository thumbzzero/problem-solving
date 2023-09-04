function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  n = arr.length;

  function DFS(level, sum, index) {
    if (level > n) return;
    if (sum > c) return;
    for (let i = 0; index + i < n; i++) {
      DFS(level + 1, sum + arr[level + index + i], index + i);
    }
    if (answer < sum) answer = sum;
  }
  DFS(0, 0, 0);
  return answer;
}
