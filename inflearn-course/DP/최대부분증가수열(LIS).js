function solution(arr) {
  // cache[i] : arr[i]가 수열의 마지막 원소일 때 부분증가수열의 최대 길이
  let cache = new Array(arr.length).fill(1);

  for (let i = 1; i < cache.length; i++) {
    // 0~(i-1)번째 원소 중 arr[i] 보다 작은 원소의 인덱스 찾기
    const smaller = arr.slice(0, i).map((element, index) => {
      if (element < arr[i]) return index;
    });

    // arr[i]보다 작은 원소들에 대해서 cache 값의 max 구하기
    let maxLength = -1;
    smaller.map((index) => {
      if (cache[index] > maxLength) maxLength = cache[index];
    });

    if (maxLength !== -1) cache[i] = maxLength + 1;
  }

  return Math.max(...cache);
}
