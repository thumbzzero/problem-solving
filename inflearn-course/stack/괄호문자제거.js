function solution(s) {
  let answer = "";
  let pairCount = 0;

  s.split("").map((s) => {
    if (s === "(") pairCount++;
    else if (s === ")") pairCount--;
    else {
      if (pairCount === 0) answer += s;
    }
  });
  return answer;
}
