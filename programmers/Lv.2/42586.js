function solution(progresses, speeds) {
  let answer = [];
  
  while (progresses.length > 0) {
      let count = 0;
      let day = Math.ceil((100-progresses[0]) / speeds[0]);

      progresses = progresses.map((p, idx) => p + speeds[idx]*day);

      for (let p of progresses) {
          if (p >= 100) count++;
          else break;
      }
      answer.push(count);
      progresses.splice(0, count);
      speeds.splice(0, count);
  }
  return answer;
}