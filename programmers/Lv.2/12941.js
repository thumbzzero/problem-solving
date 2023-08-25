function solution(A,B){
    var answer = 0;
    A.sort((previous, current) => previous - current);  // 오름차순
    B.sort((previous, current) => current - previous);  // 내림차순

    for (let i = 0; i < A.length ; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}
