const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const test = parseInt(input.shift());

const weight = {
  I: 0, E: 1,
  N: 0, S: 1,
  F: 0, T: 1,
  P: 0, J: 1,
};

const distance = new Array(16).fill([]).map(() => new Array(16).fill(0));

function getIndex(mbti) {
  let index = 0;
  for (let i=0; i<4; i++) {
    index += Math.pow(2, i) * weight[mbti[i]];
  }
  return index;
}

function getDistance(mbti1, mbti2) {
  let idx1 = getIndex(mbti1), idx2 = getIndex(mbti2);
  return distance[Math.min(idx1, idx2)][Math.max(idx1, idx2)];
}

for (let i=0; i<16; i++) {
  for (let j=i+1; j<16; j++) {
    for (let e=0; e<4; e++) {
      let a = Math.pow(2, e);
      if (Math.floor(i/a % 2) !== Math.floor(j/a % 2)) {
        distance[i][j] += 1;
      }
    }
  }
}

for (let t=0; t<test; t++) {
  const N = parseInt(input.shift());
  const mbti = input.shift().split(' ');
  let answer = Infinity;

  /* N이 32를 넘어가면 반드시 같은 MBTI가 3개 이상 있다. */
  if (N > 32) {
    console.log(0);
    continue;
  }

  for (let a=0; a<N; a++) {
    for (let b=a+1; b<N; b++) {
      for (let c=b+1; c<N; c++) {
        let d = 0;
        d += getDistance(mbti[a], mbti[b]);
        d += getDistance(mbti[b], mbti[c]);
        d += getDistance(mbti[a], mbti[c]);
        if (d < answer) answer = d;
      }
    }
  }

  console.log(answer);
}