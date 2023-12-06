const fs = require("fs");
let [N, ...graph]= fs.readFileSync("/dev/stdin").toString().trim().split("\n");

N = parseInt(N);
graph = graph.map((row) => row.split(' ').map(Number));
let answer = new Array(N).fill(0).map(() => new Array(N).fill(0));

function BFS(i, j) {
  let visited = new Array(N).fill(false);
  let queue = [i], qIdx = 0;
  let cur, dist = 0;

  while (qIdx < queue.length) {
    cur = queue[qIdx++];

    for (let v=0; v<N; v++) {
      if (visited[v]) continue;
      if (!graph[cur][v]) continue;

      visited[v] = true;
      queue.push(v); 
      dist++;
      if (v === j && dist > 0) return 1;
    }
  }

  return 0;
}

for (let i=0; i<N; i++) {
  for (let j=0; j<N; j++) {
    answer[i][j] = BFS(i, j);
  }
}

for (const row of answer) {
  console.log(row.join(' '));
}