function solution(arr) {
  let min = Math.min(...arr);
  let answer = arr.filter(n => n !== min);
  
  if (answer.length === 0) return [-1];
  return answer;
}
