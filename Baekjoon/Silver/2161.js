const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cards = [], i = 0;
let answer = '';

for (let n=1; n<=N; n++) cards.push(n);

while (i < cards.length) {
  answer += `${cards[i++]} `;
  cards.push(cards[i++]);
}

console.log(answer);