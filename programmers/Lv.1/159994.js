function solution(cards1, cards2, goal) {
  let i=0, j=0, g=0;
  while (g < goal.length) {
      if (i < cards1.length && cards1[i] === goal[g]) i++;
      else if (j < cards2.length && cards2[j] === goal[g]) j++;
      else return 'No';
      g++;
  }
  return 'Yes';
}
