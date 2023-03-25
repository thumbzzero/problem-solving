def solution(n):
    bin_n = str(format(n, 'b'))
    one_count = bin_n.count('1')
    next = n + 1
    bin_next = str(format(next, 'b'))
    
    if '0' in bin_n:
        while (bin_next.count('1') != one_count):
            next += 1
            bin_next = str(format(next, 'b'))
    else:
        bin_next = '10' + bin_n[1:]
    
    return int(bin_next, 2)
