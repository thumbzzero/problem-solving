def solution(s):
    stack = 0
    
    if (s[0] == ')' or s[-1] == '('):
        return False
    
    for i in range(len(s)):
        if (s[i] == '('):
            stack += 1
        else:
            stack -= 1
            if (stack < 0):
                return False
            
    if (stack == 0):
        return True

    return False
