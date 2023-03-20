function solution(s) {
    var answer = '';
    words = s.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    });
    answer = words.join(" ");
    return answer;
}
