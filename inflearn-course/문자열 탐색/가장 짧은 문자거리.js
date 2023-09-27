function solution(s, t) {
  let answer = new Array(s.length).fill(0);

  let t_index = s
    .split("")
    .map((char, index) => {
      if (char === t) return index;
    })
    .filter((index) => index !== undefined);

  let t_count = t_index.length;

  for (let i = t_index[0] - 1; i >= 0; i--) answer[i] = t_index[0] - i;
  for (let i = t_index[t_count - 1] + 1; i < answer.length; i++)
    answer[i] = i - t_index[t_count - 1];

  let idx = 1;
  for (let i = t_index[0] + 1; i < t_index[t_count - 1]; i++) {
    if (i === t_index[idx]) idx++;
    answer[i] = Math.min(t_index[idx] - i, i - t_index[idx - 1]);
  }

  return answer.join(" ");
}
