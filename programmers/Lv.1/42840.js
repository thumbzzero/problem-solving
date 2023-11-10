const one = [1, 2, 3, 4, 5];
const two = [2, 1, 2, 3, 2, 4, 2, 5];
const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function getNextIdx(people, pointer) {
    let len;
    if (people === 1) len = one.length - 1
    else if (people === 2) len = two.length - 1;
    else len = three.length - 1;
    return pointer === len ? 0 : pointer + 1;
}

function solution(answers) {
    let answer = [];
    let count = [0, 0, 0];
    
    let p1 = p2 = p3 = 0;
    
    answers.forEach((ans, idx) => {
        if (ans === one[p1]) count[0]++;
        if (ans === two[p2]) count[1]++;
        if (ans === three[p3]) count[2]++;
        
        p1 = getNextIdx(1, p1);
        p2 = getNextIdx(2, p2);
        p3 = getNextIdx(3, p3);
    });
    
    let max = Math.max(...count);
    count.forEach((cnt, idx) => {
        if (cnt === max) answer.push(idx+1);
    })
    
    return answer;
}