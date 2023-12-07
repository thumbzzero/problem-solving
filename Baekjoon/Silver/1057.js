const fs = require("fs");
let [N, J, H] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let answer = 1;

while (answer < N) {
  if (Math.floor((J+1)/2) === Math.floor((H+1)/2)) {
    console.log(answer);
    return;
  }
  answer++;
  J = Math.floor((J+1)/2);
  H = Math.floor((H+1)/2);  
}

console.log(-1);