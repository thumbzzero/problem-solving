function sum(ary) {
  return ary.reduce((total, current) => {
    return total + current;
  }, 0);
}

function solution(n, arr) {
  let num = 0;
  let max = 0;
  for (let element of arr) {
    let temp = sum(
      element
        .toString()
        .split("")
        .map((element) => parseInt(element))
    );
    if (max <= temp && num < element) {
      max = temp;
      num = element;
    }
  }
  return num;
}
