let n, m, visited, costs, map;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function OOB(x, y) {
    return x < 0 || x >= n || y < 0 || y >= m;
}

function BFS() {
    let queue = [[0, 0]], qIdx = 0;
    visited[0][0] = true;
    costs[0][0] = 1;
    
    while (qIdx < queue.length) {
        let [cx, cy] = queue[qIdx++];
        let cost = costs[cx][cy];
        for (let i=0; i<4; i++) {
            let [nx, ny] = [cx + dx[i], cy + dy[i]];
            if (OOB(nx, ny)) continue;
            if (visited[nx][ny]) continue;
            if (!map[nx][ny]) continue;
            visited[nx][ny] = true;
            costs[nx][ny] = cost + 1;
            queue.push([nx, ny]);
            if (nx === n-1 && ny === m-1) return;
        }
    }
}

function solution(maps) {
    map = maps;
    n = maps.length, m = maps[0].length;
    visited = new Array(n).fill([]).map(() => new Array(m).fill(false));
    costs = new Array(n).fill([]).map(() => new Array(m).fill(0));
    BFS();

    return costs[n-1][m-1] === 0 ? -1 : costs[n-1][m-1];
}