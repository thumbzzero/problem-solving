const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let table = new Array(N).fill([]).map(() => new Array(N).fill(0));
let center = Math.floor(N/2);
table[center][center] = 1;
let n = 3;
let location = [center + 1, center + 1];

function rotate(n) {
  let num = (n-2) ** 2 + 1;
  let [cx, cy] = [center - Math.floor(n/2), center - Math.floor(n/2) + 1];
  let t1 = num + (n-2);
  let t2 = t1 + (n-1);
  let t3 = t2 + (n-1);
  let step = 1;

  while (num <= n*n) {
    if (num === K) {
      location = [cx + 1, cy + 1];
    }

    table[cx][cy] = num++;

    if (step === 1) cy++;
    else if (step === 2) cx++; 
    else if (step === 3) cy--;
    else cx--;

    if (num === t1 || num === t2 || num === t3) {
      step++;
    }
  }
}

while (n*n <= N*N) {
  rotate(n);
  n += 2;
}

table.forEach((row) => console.log(row.join(' ')));
console.log(location.join(' '));