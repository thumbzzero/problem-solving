function solution(numbers) {
  let answer = 0, i = 0;
  numbers.sort((a, b) => a - b);
  
  for (let n=0; n<=9; n++) {
      if (n === numbers[i]) i++;
      else answer += n;
  }
  
  return answer;
}