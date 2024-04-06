function solution(t, p) {
  let answer = 0, i = 0;
  
  while (i + p.length <= t.length) {
      if (parseInt(t.substring(i, i + p.length)) <= parseInt(p)) {
          answer++;
      }
      i++;
  }
  
  return answer;
}