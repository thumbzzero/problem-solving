function solution(n) {
    var answer = 1;
    
    let start = 1;
    let end = 2;
    let sum = 0;

    while (start <= n/2) {
        sum = start
        end = start + 1;
        while (sum < n) {
            sum += end;
            end += 1;
            if (sum == n)
                answer += 1;
        }
        start += 1;
    }
    
    return answer;
}
