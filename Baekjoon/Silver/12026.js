const fs = require("fs");
let [N, road] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

N = parseInt(N);

let cache = new Array(N+1).fill(-1).map(() => new Object());
road.split('').forEach((b, i) => {
  cache[i+1].block = b;
  cache[i+1].energy = Infinity;
});
cache[1].energy = 0;

const previousBlock = { 'B': 'J', 'O': 'B', 'J': 'O' };

function f(i) {
  if (i <= 0 || i > N) return Infinity;
  if (cache[i].energy !== Infinity) return cache[i].energy;

  for (let k=1; i-k>0; k++) {
    if (cache[i-k].block === previousBlock[cache[i].block]) {
      cache[i].energy = Math.min(cache[i].energy, f(i-k) + k*k);
    }
  }
  return cache[i].energy;
}

console.log(f(N) === Infinity ? -1 : f(N));