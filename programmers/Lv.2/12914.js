const dp = {
    1: 1,
    2: 2,
};

function solution(n) {
    if (typeof dp[n] === 'number') return dp[n];
    
    dp[n] = solution(n-1) + solution(n-2);
    return dp[n] % 1234567;
}
