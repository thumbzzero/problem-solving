function solution(n) {
    var answer = 0;
    let bin_n = n.toString(2);
    let one_count = bin_n.split('1').length - 1
    let next = n+1;
    let bin_next = next.toString(2);

    if (bin_n.includes('0')) {
        while (bin_next.split('1').length - 1 != one_count) {
            next += 1
            bin_next= next.toString(2)
        }        
    } else {
        bin_next = '10' + bin_n.substring(1);
    }
    return parseInt(bin_next, 2);
}
