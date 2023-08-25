function solution(s)
{
    let stack = [s[0]]
    if (s.length % 2 != 0) return 0;
    
    for (let i=1; i < s.length; i++) {
        stack.push(s[i]);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
            stack.pop(); stack.pop();
        }
    }
    
    if (stack.length == 0) return 1

    return 0;
}
