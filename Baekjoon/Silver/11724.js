const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const graph = new Array(N+1).fill([]).map(() => new Array(N+1).fill(0));

input.forEach((e) => {
  let [u, v] = e.split(' ').map(Number);
  graph[u][v] = graph[v][u] = 1;
});

let answer = 0;
let visited = new Array(N+1).fill(false);

function BFS(start) {
  let u, queue = [start];
  visited[start] = true;

  while (queue.length) {
    u = queue.shift();
    for (let v=1; v<=N; v++) {
      if (!graph[u][v]) continue;
      if (visited[v]) continue;
      visited[v] = true;
      queue.push(v);
    }
  }
}

for (let u=1; u<=N; u++) {
  if (!visited[u]) {
    BFS(u);
    answer++;
  }
}

console.log(answer);