function solution(n, words) {
    let out = 0;
    let turn = 1;
    let previous_words = [words[0]]
    
    for (let i = 1; i < words.length; i++) {
        if (i % n == 0)
            turn += 1;
        if (words[i-1].at(-1) != words[i][0] || previous_words.includes(words[i])) {
            out = i % n + 1;
            break;
        }
        previous_words.push(words[i]);
    }
    if (out == 0) return [0, 0]

    return [out, turn];
}
