const MAX = 100;

let isPrime = new Array(MAX+1).fill(true);
let primes = [];

function findPrimes() {
    isPrime[0] = isPrime[1] = false;
    for (let i=2; i <= MAX; i++) {
        let j=2;
        if (isPrime[i]) {
            primes.push(i);
            while (i*j <= MAX) isPrime[i*j++] = false;
        }
    }
}

function solution(arr) {
    let answer = 1;
    arr.sort((a, b) => a - b);
    
    findPrimes();
    
    let p, pIdx=0;
    while (arr.length) {
        let maxCnt=0;
        p = primes[pIdx++];
        for (let i=0; i<arr.length; i++) {
            let cnt = 0;
            while (arr[i] % p === 0) {
                arr[i] = arr[i] / p;
                cnt++;
            }
            if (maxCnt < cnt) maxCnt = cnt;
        }   
        arr = arr.filter((n) => n !== 1);
        answer *= Math.pow(p, maxCnt);
    }
    
    return answer;
}