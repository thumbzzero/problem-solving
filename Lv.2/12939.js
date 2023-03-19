function solution(s) {
    var answer = '';
    numbers = s.split(' ').map(Number);
    
    answer += Math.min(...numbers);
    answer += " ";
    answer += Math.max(...numbers);
    return answer;
}
