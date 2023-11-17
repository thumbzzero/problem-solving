let N, graph = {}, visited, costs;

function BFS(start) {
    let queue = [start], qIdx = 0;
    visited[start] = true;
    let cur;
    
    while (qIdx < queue.length) {
        cur = queue[qIdx++];
        for (let next=1; next<=N; next++) {
            if (visited[next]) continue;
            if (!graph[cur].includes(next)) continue;
            visited[next] = true;
            queue.push(next);
            costs[next] = costs[cur] + 1;
        }
    }
}

function solution(n, edge) {
    let answer = [];
    N = n;
    visited = new Array(n+1).fill(false);
    costs = new Array(n+1).fill(0);
    edge.forEach(([v1, v2]) => {
        if (graph[v1] === undefined) graph[v1] = [v2];
        else graph[v1].push(v2);
        if (graph[v2] === undefined) graph[v2] = [v1];
        else graph[v2].push(v1);
    });
    
    BFS(1);
    
    costs.forEach((cost, idx) => {
        if (cost === Math.max(...costs)) answer.push(idx);
    })
    
    return answer.length;
}