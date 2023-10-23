function solution(priorities, location) {
  let answer = 0;
  
  while (location >= 0) {
      let cur = priorities.shift();
      if (cur < Math.max(...priorities)) {
          priorities.push(cur);
          if (location === 0) location = priorities.length - 1;
          else location--;
      } else {
          answer++;
          location--;
      }
  }
  
  return answer;
}