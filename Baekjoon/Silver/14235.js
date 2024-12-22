const fs = require("fs");
let [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

N = Number(N);

let pq = [Infinity];

function insertPQ(e) {
  pq.push(e);
  let i = pq.length - 1, p = Math.floor(i/2);

  while (pq[i] > pq[p]) {
    pq[i] = pq[p];
    pq[p] = e;
    i = p, p = Math.floor(i/2);
  }
}

function deletePQ() {
  if (pq.length <= 2) return pq.pop();

  let d = pq[1];
  pq[1] = pq.pop();
  
  let p = 1, l = p*2, r = l + 1;

  while ((l < pq.length && pq[l] > pq[p]) || (r < pq.length && pq[r] > pq[p])) {
    let temp = pq[p];
    if (r >= pq.length || pq[l] > pq[r]) {
      pq[p] = pq[l];
      pq[l] = temp;
      p = l;
    } else {
      pq[p] = pq[r];
      pq[r] = temp;
      p = r;
    }
    l = p*2, r = l + 1;
  }

  return d;
}


for (let i=0; i<N; i++) {
  const [a, ...value] = input[i].trim().split(' ').map(Number);
  if (a === 0) {
    if (pq.length <= 1) {
      console.log(-1);
    } else {
      console.log(deletePQ());
    }
  } else {
    for (const v of value) insertPQ(v);
  }
}