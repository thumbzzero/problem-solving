let tri, h, dp;

/* [i][j]에서 출발했을 때, 거쳐간 숫자의 합의 MAX */
function f(i, j) {  
    if (j >= i+1) return -1;
    if (i >= h-1) return tri[i][j];
    if (dp[i][j] !== -1) return dp[i][j];
    dp[i][j] = Math.max(f(i+1, j), f(i+1, j+1)) + tri[i][j];
    return dp[i][j];
}

function solution(triangle) {
    tri = triangle;
    h = triangle.length;
    dp = new Array(h).fill([]).map((c, i) => new Array(i+1).fill(-1));

    return f(0, 0);
}