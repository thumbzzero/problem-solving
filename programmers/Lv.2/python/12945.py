def solution(n):
    fibo = [0, 1]
    while (len(fibo) <= n):
        fibo.append(fibo[len(fibo) - 2] + fibo[len(fibo) - 1])
    return fibo[n] % 1234567
