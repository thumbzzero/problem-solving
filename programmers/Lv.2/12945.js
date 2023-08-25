// solution 1 : BigInt 이용
function solution(n) {
    fibo = [0n, 1n];
    while (fibo.length <= n) {
        fibo.push(fibo[fibo.length-2] + fibo[fibo.length-1]);
    }
    return fibo[n] % 1234567n;
}


// solution 2 : (A + B) % p = ((A % p) + (B % p)) % p 이용
function solution2(n) {
    fibo_remainder = [0, 1];
    
    while (fibo_remainder.length <= n) {
        fibo_remainder.push((fibo_remainder[fibo_remainder.length-2] + fibo_remainder[fibo_remainder.length-1]) % 1234567);
    }
    return fibo_remainder[n];
}
