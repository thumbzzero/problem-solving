function solution(s) {
  let answer = '';
  let words = s.split(' ');
  words.forEach((str) => {
      str.split('').forEach((c, i) => {
          if (i % 2) answer += c.toLowerCase();
          else answer += c.toUpperCase();
      })
      answer += ' ';
  })
  return answer.slice(0, -1);
}
