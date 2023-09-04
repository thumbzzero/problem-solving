function solution(n) {
  function DFS(level, currentSet, currentElement) {
    if (currentElement > n) return;
    for (let i = 1; currentElement + i <= n; i++) {
      DFS(level + 1, [...currentSet, currentElement + i], currentElement + i);
    }
    if (level > 0) console.log(currentSet);
  }
  DFS(0, [], 0);
}
