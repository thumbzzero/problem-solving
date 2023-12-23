function solution(x) {
  let d = 0;
  
  x.toString().split('').forEach(num => d += parseInt(num));
  
  if (x % d) return false;
  return true;
}