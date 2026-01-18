const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 가족 관계 -> 양방향 그래프 -> "최단 경로 길이" (bfs)

const n = Number(input[0]);
const [p1, p2] = input[1].split(' ').map(Number);
const relationships = input.slice(3).map((r) => r.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

relationships.forEach((r) => {
  const [parent, child] = r;
  graph[parent].push(child);
  graph[child].push(parent);
});

function BFS(p1, p2) {
  const queue = [p1];
  const distance = new Array(n + 1).fill(-1);
  distance[p1] = 0;

  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];

    if (cur === p2) {
      return distance[cur];
    }

    for (const next of graph[cur]) {
      if (distance[next] !== -1) continue;
      
      queue.push(next);
      distance[next] = distance[cur] + 1;
    }
  }

  return -1;
}

console.log(BFS(p1, p2));
