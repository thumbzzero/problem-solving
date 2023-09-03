function solution(n) {
  let answer = "";

  // 전위순회: [루트 - 왼쪽 자식 - 오른쪽 자식] 순
  function preorder(n) {
    if (n > 7) return;
    answer += `${n} `;
    preorder(2 * n);
    preorder(2 * n + 1);
  }

  // 중위순회: [왼쪽 자식 - 루트 - 오른쪽 자식] 순
  function inorder(n) {
    if (n > 7) return;
    inorder(2 * n);
    answer += `${n} `;
    inorder(2 * n + 1);
  }

  // 후위순회: [왼쪽 자식 - 오른쪽 자식 - 루트] 순
  function postorder(n) {
    if (n > 7) return;
    postorder(2 * n);
    postorder(2 * n + 1);
    answer += `${n} `;
  }

  preorder(n);
  answer += "\n";
  inorder(n);
  answer += "\n";
  postorder(n);

  return answer;
}

console.log(solution(1));
