function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) answer += str[i];
    // if (!isNaN(str[i])) answer += str[i];
  }
  return parseInt(answer);
}
