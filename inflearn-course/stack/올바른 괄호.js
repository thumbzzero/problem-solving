function solution(s) {
  let stack = [];
  s.split("").map((s) => {
    if (s === "(") stack.push(1);
    else stack.pop();
  });

  if (stack.length === 0) return "YES";
  return "NO";
}
