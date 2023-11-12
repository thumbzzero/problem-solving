const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const costs = input.map((cost) => cost.split(' ').map(Number));

let prevCosts = costs[0];
let currentCosts = new Array(3).fill(Infinity);

function f() {
  for (let n=1; n<N; n++) {
    currentCosts[0] = currentCosts[1] = currentCosts[2] = Infinity;
    for (let prev=0; prev<3; prev++) {
      let prevCost = prevCosts[prev];
      for (let cur=0; cur<3; cur++) {
        if (prev !== cur) { 
          currentCosts[cur] = Math.min(currentCosts[cur], prevCost + costs[n][cur]);
        }
      }
    }  
    prevCosts = currentCosts.slice();
  }

  return Math.min(...currentCosts);
}

console.log(f());