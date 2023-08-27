function solution(s) {
  const str = s.toLowerCase();
  let i = 0;
  while (i < str.length / 2) {
    if (str[i] !== str[str.length - 1 - i]) return "NO";
    i++;
  }
  // if (str !== str.split('').reverse().join('')) return "NO";
  return "YES";
}
