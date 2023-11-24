let score = { 
  R: 0, T: 0,
  C: 0, F: 0,
  J: 0, M: 0,
  A: 0, N: 0,
};

function getCharacter(c1, c2) {
  if (score[c1] < score[c2]) return c2;
  return c1;
}

function solution(survey, choices) {    
  let answer = ''
  
  for (let i=0; i<survey.length; i++) {
      let [s1, s2] = survey[i];
      if (choices[i] <= 3) {
          score[s1] += (4 - choices[i]);
      } else if (choices[i] >= 5) {
          score[s2] += (choices[i] - 4);
      }
  }
  
  answer += getCharacter('R', 'T');
  answer += getCharacter('C', 'F');
  answer += getCharacter('J', 'M');
  answer += getCharacter('A', 'N');
  
  return answer;
}