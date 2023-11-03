function isEqual(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i=0; i<str1.length; i++) {
      if (str1[i] !== str2[i]) return false;
  }
  return true;
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for (let i=0; i<participant.length; i++) {
      if (i == participant.length - 1) return participant[i];
      if (!isEqual(participant[i], completion[i])) {     
          return participant[i];
      }
  }
}