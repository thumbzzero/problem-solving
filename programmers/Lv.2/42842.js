function solution(brown, yellow) {    
  let yellow_pair = [[1, yellow]]
  for (let i=2; i <= yellow/2; i++) {
      if (yellow % i === 0)
          yellow_pair.push([i, yellow/i])
  }

  for (let i=0; i < yellow_pair.length; i++) {
      if (brown === 2 * (yellow_pair[i][0] + yellow_pair[i][1]) + 4)
          return [yellow_pair[i][1] + 2, yellow_pair[i][0] + 2]
  }
}