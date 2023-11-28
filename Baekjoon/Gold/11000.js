const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

/*
Si(시작) -> Ti(끝)  N개의 수업
1) 최소 강의실 사용
2) 모든 수업 가능

강의실 개수?
*/

const N = parseInt(input.shift());
const classes = input.map((c) => c.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

let pq = [null];

function insertPQ(e) {
  pq.push(e);
  let i = pq.length - 1, p = Math.floor(i/2);

  while (pq[i] < pq[p]) {
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

  while ((l < pq.length && pq[l] < pq[p]) || (r < pq.length && pq[r] < pq[p])) {
    let temp = pq[p];
    if (r >= pq.length || pq[l] < pq[r]) {
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

for (let n=0; n<N; n++) {
  let [s, t] = classes[n];
  if (pq.length >= 2 && pq[1] <= s) {
    deletePQ();
  }
  insertPQ(t);
}

console.log(pq.length - 1);