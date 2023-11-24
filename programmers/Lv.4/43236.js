let N, rks, dist;

function countRemovedRocks(distance) {
    let n = 0, d = rks[0], i = 0;

    while (i < rks.length) {
        i++;
        if (d < distance) {
            n += 1;
            d += (rks[i] - rks[i-1]); 
        } else {
            d = rks[i] - rks[i-1];
        }
    }
    
    return n;
}

function binarySearch(start, end) {
    if (start > end) return end;
    
    let mid = Math.floor(start + (end - start) / 2);
    if (countRemovedRocks(mid) > N) return binarySearch(start, mid-1);
    return binarySearch(mid+1, end);
}

function solution(distance, rocks, n) {
    dist = distance;
    rks = rocks;
    N = n;
    
    rks.sort((a, b) => a - b);
    rks.push(distance);
   
    return binarySearch(0, distance);
}