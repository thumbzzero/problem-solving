let N;

function getNextNumber(x, operation) {
    if (operation === 1) return x + N;
    if (operation === 2) return x * 2;
    return x * 3;
}

function solution(x, y, n) {
    N = n;
    
    let cache = {}, queue = [x], qIdx = 0, cur, next;
    cache[x] = 0;
    
    while (qIdx < queue.length) {
        cur = queue[qIdx++];
        for (let i=1; i<=3; i++) {
            next = getNextNumber(cur, i);
            if (cache[next] !== undefined) continue;
            if (next > y) continue; 
            queue.push(next);
            cache[next] = cache[cur] + 1;
        }
    }
    
    return cache[y] ?? -1;
}