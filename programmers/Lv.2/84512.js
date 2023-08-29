const weight = {
  'A': 0,
  'E': 1,
  'I': 2,
  'O': 3,
  'U': 4,
}

function sol(n) { // n: 자릿수
  let anw = 1
  for (let i=1; i<n; i++) {
      anw += Math.pow(5, i);
  }
  return anw;
}

function solution(word) {
  const ary = word.split('');
  let answer = 1
  let i=0
  while (i < ary.length) {    
      answer += sol(5-i) * (weight[ary[i]]) + 1;
      i++;
  }
  return answer-1 ;

}