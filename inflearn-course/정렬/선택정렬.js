function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr.slice(i));
    let index = arr.indexOf(min);
    arr[index] = arr[i];
    arr[i] = min;
  }

  return arr;
}
