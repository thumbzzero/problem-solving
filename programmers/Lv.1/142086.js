function solution(s) {
  let answer = [];
  let hash = {};
  
  s.split('').forEach((c, i) => {
      if (hash[c] === undefined) answer.push(-1);
      else answer.push(i - hash[c]);
      hash[c] = i;
  });
  
  return answer;
}
