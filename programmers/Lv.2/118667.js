function sum(ary) {
  return ary.reduce((total, current) => total + current);
}

function solution(queue1, queue2) {
  let answer = 0;
  
  queue1 = queue1.map((n) => BigInt(n));
  queue2 = queue2.map((n) => BigInt(n));
  
  let total1 = sum(queue1);
  let total2 = sum(queue2);
  
  if ((total1 + total2) % 2n === 1n) return -1;

  let goal = (total1 + total2) / 2n;
  let limit = queue1.length * 4;
  let element, qIdx1 = 0, qIdx2 = 0;
  
  while (total1 !== goal) {
      if (total1 > total2) {
          element = queue1[qIdx1++];
          queue2.push(element);
          total1 -= element;
          total2 += element;
      } else {
          element = queue2[qIdx2++];
          queue1.push(element);
          total1 += element;
          total2 -= element;
      }
      answer++;
      if (answer > limit) return -1;
  }
  
  return answer;
}   