function solution(n, k) {
  let queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  let number = 1;
  while (queue.length > 1) {
    queue.push(queue.shift());
    number++;
    if (number === k) {
      queue.shift();
      number = 1;
    }
  }
  return queue[0];
}

console.log(solution(8, 3));
