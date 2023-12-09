function solution(s){
  let pCnt = 0, yCnt = 0;
  
  s = s.toLowerCase();
  for (const c of s) {
      if (c === 'p') pCnt++;
      else if (c === 'y') yCnt++;
  }
  if (pCnt === yCnt) return true;
  return false;
}