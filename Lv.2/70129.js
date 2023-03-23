function solution(s) {
    let count = 0;
    let deleted_zero = 0;
    
    while (s.length != 1) {
        previous = s.length;
        s = s.replace(/0/g, '');
        current = s.length
        s = s.length.toString(2);
        count++;
        deleted_zero += previous - current;
    }
    
    return [count, deleted_zero];
}
