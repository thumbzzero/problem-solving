function solution(A,B){
    var answer = 0;
    const a = A.sort((previous, current) => previous - current);
    const b = B.sort((previous, current) => current - previous);
    
    for (let i = 0; i < A.length ; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}
