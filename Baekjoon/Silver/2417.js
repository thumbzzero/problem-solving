const fs = require("fs");
const N = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

function binarySearch(start, end) {
  if (start > end) return start;
  let mid = (start + end) / 2n;  // q

  if (mid*mid === N) return mid;
  if (mid*mid < N) return binarySearch(mid+1n, end);
  return binarySearch(start, mid-1n);
}

console.log(binarySearch(0n, N).toString());