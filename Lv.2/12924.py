def solution(n):
    answer = 1
    start = 1
    end = 2
    sum = 0
    
    while (start <= n/2):
        end = start + 1
        sum = start
        while (sum < n):
            sum += end
            end += 1
            if (sum == n):
                answer += 1
        start += 1
    
    return answer
