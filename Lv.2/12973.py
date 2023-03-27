def solution(s):
    stack = [s[0]]
    
    if (len(s) % 2 != 0): return 0

    for i in range(1, len(s)):
        stack.append(s[i])
        if (len(stack) >= 2 and stack[-1] == stack[-2]):
            stack.pop()
            stack.pop()
            
    if (len(stack) == 0): return 1
    
    return 0
