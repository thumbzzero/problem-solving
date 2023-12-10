function solution(s) {
  let mid = Math.floor(s.length/2)
  if (s.length % 2) {
      return s[mid];
  }
  return s.substring(mid-1, mid+1);
}