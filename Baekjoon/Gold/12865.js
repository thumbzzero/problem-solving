const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input.shift().split(' ').map(Number);
const items = input.map((item) => item.split(' ').map(Number));

let cache = new Array(K+1).fill(0);

// items i를 넣을지 말지는 loop i에서만 결정
for (let i=0; i<N; i++) {
  // 만약 k-wi >= 0 && f(k-wi)+vi > cache[k]라면 items[i]를 넣는다.
  let [w, v] = items[i];

  // 물건이 중복으로 들어가는 것을 막기 위해 k=K부터 감소하며 update
  for (let k=K; k-w >= 0; k--) {
    cache[k] = Math.max(cache[k], cache[k-w] + v);
  }
}

console.log(cache[K]);