const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let tree = {};
let nodes = {};

for (let n=1; n<=N; n++) {
  tree[n] = {
    parent:null,
    children: [],
  };
  nodes[n] = [];
}

input.map((node) => node.split(' ').map(Number)).forEach((node) => {
  nodes[node[0]].push(node[1]);
  nodes[node[1]].push(node[0]);
});

let queue = [1], qIdx = 0;
let visited = new Array(N+1).fill(false);
visited[1] = true;

while (qIdx < queue.length) {
  let cur = queue[qIdx++];
  let idx = 0;
  while (nodes[cur][idx]) {
    let child = nodes[cur][idx++];
    if (visited[child]) continue;
    visited[child] = true;
    queue.push(child);
    tree[cur].children.push(child);
    tree[child].parent = cur;
  }
}

let answer = '';
for (let n=2; n<=N; n++) {
  answer += `${tree[n].parent}\n`;
}

console.log(answer);