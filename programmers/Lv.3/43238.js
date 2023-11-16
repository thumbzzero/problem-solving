let n, times;
let answer;

function getCount(mid) {
    let cnt = 0;
    for (let i=0; i<times.length; i++) {
        cnt += Math.floor(mid / times[i]);
    }
    
    return cnt;
}

function binarySearch(start, end) {
    if (start > end) return end;
    let mid = Math.floor(start + (end - start) / 2);
    let cnt = getCount(mid);

    if (cnt >= n) {
        answer = mid;
        return binarySearch(start, mid - 1);
    }
    return binarySearch(mid + 1, end);
}

function solution(N, T) {
    n = N, times = T;
    binarySearch(0, n * Math.max(...times));
    
    return answer;
}