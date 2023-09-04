function solution(numbers, target) {
  let answer = 0;
  
  function DFS(level, sum) {
      if (level > numbers.length) return;
      if (level === numbers.length && sum === target) answer++;
      DFS(level + 1, sum + numbers[level]);
      DFS(level + 1, sum - numbers[level]);
  }
  DFS(0, 0);
  return answer;
}