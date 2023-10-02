function solution(arr1, arr2) {
  let answer = [];
  let [p1, p2] = [0, 0];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 < arr1.length) answer.push(...arr1.slice(p1));
  else answer.push(...arr2.slice(p2));

  return answer;
}
