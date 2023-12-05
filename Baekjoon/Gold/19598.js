const fs = require("fs");
let [N, ...meetings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function insertPQ(pq, e) {
  pq.push(e);
  let i = pq.length - 1, p = Math.floor(i/2);
  
  while (p >= 1 && pq[i] < pq[p]) {
    pq[i] = pq[p];
    pq[p] = e;
    i = p, p = Math.floor(i/2);
  }
}

function deletePQ(pq) {
  if (pq.length <= 2) return pq.pop();

  let d = pq[1];
  pq[1] = pq.pop();

  let p = 1, l = p * 2; r = l + 1;

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
    l = p * 2, r = l + 1;    
  }

  return d;
}

N = parseInt(N);
meetings = meetings.map((meeting) => meeting.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

let pq = [null];

for (const [start, end] of meetings) {
  if (pq[1] <= start) deletePQ(pq);
  insertPQ(pq, end);
}

console.log(pq.length - 1);