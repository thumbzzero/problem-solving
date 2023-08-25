def solution(n, words):
    out = 0
    turn = 1
    previous_words = [words[0]]
    
    for i in range(1, len(words)):
        if (i % n == 0):
            turn += 1
        if (words[i-1][-1] != words[i][0] or words[i] in previous_words):
            out = i % n + 1
            break
        previous_words.append(words[i])
    
    if (out == 0): return [0, 0]
    
    return [out, turn]
