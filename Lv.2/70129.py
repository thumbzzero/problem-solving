def solution(s):
    count = 0
    deleted_zero = 0
    
    while (len(s) != 1):
        previous = len(s)
        s = s.replace('0', '')
        current = len(s)
        s = str(format(len(s), 'b'))
        count += 1
        deleted_zero += previous - current
        
    return [count, deleted_zero]
