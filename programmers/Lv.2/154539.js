function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [0];
    
    for (let i = 1; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }

    return answer;
}
