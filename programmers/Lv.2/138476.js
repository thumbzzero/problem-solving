function solution(k, tangerine) {
    tangerine.sort();
    current_size = tangerine[0];
    count = 1;
    counts = [];
    idx = 0;

    for (let i = 1; i < tangerine.length; i++) {
        if (tangerine[i] == current_size)
            count++;
        if (i == tangerine.length - 1 || tangerine[i] != current_size) {
            counts.push(count);
            count = 1;
            current_size = tangerine[i];
        }
    }
    
    counts.sort((a, b) => b - a);
    while (k > 0) {
        k -= counts[idx];
        idx++;
    }
    return idx;
}
