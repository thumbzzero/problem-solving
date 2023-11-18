const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(' ').map(Number);

let ary = [];
for (let n=1; n<=N; n++) ary.push(BigInt(input[n]));

let tree = new Array(N*4).fill(-1n);

function createSegmentTree(start, end, index) {
  if (start === end) {
    tree[index] = BigInt(ary[start]);
    return tree[index];
  }
  let mid = Math.floor((start + end) / 2);
  tree[index] = createSegmentTree(start, mid, index*2) + createSegmentTree(mid+1, end, index*2 + 1);
  return tree[index];
}

function updateSegmentTree(start, end, index, target, value) {
  if (target < start || target > end) return;

  tree[index] += BigInt(value);
  if (start === end) return;

  let mid = Math.floor((start + end) / 2);
  updateSegmentTree(start, mid, index*2, target, value);
  updateSegmentTree(mid+1, end, index*2 + 1, target, value);
}

function getIntervalSum(start, end, index, left, right) {
  if (left > end || right < start) return 0n;
  if (left <= start && right >= end) return BigInt(tree[index]);

  let mid = Math.floor((start + end) / 2);
  return getIntervalSum(start, mid, index*2, left, right) + getIntervalSum(mid+1, end, index*2 + 1, left, right);
}

createSegmentTree(0, N-1, 1);

for (let i=N+1; i<=N+M+K; i++) {
  let [a, b, c] = input[i].split(' ');
  a = parseInt(a);
  b = parseInt(b) - 1;
  c = BigInt(c);

  if (a === 1) {
    updateSegmentTree(0, N-1, 1, b, BigInt(c) - ary[b]);
    ary[b] = BigInt(c);
  }
  else console.log(getIntervalSum(0, N-1, 1, b, Number(c)-1).toString());
}