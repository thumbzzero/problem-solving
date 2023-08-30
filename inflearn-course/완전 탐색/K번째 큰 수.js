function solution(n, k, card) {
  let answer = Infinity;
  let count = 0;

  card.sort().reverse();

  for (let a = 0; a < n - 2; a++) {
    for (let b = 1; b < n - 1; b++) {
      for (let c = 2; c < n; c++) {
        let sum = card[a] + card[b] + card[c];
        if (answer === sum) continue;
        answer = sum;
        count++;
        if (count === k) return answer;
      }
    }
  }
}
