const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let tree = {};

let parent;
input.map((node) => node.split(' ').forEach((n, i) => {
  if (i === 0) {
    parent = n;
    tree[parent] = {};
  } else if (i === 1) {
    tree[parent]['leftChild'] = n;
  } else {
    tree[parent]['rightChild'] = n;
  }
}));

let answer = ['', '', ''];

function preorder(v) {
  if (v === '.') return;
  answer[0] += v;
  preorder(tree[v].leftChild);
  preorder(tree[v].rightChild);
}

function inorder(v) {
  if (v === '.') return;
  inorder(tree[v].leftChild);
  answer[1] += v;
  inorder(tree[v].rightChild);
}

function postorder(v) {
  if (v === '.') return;
  postorder(tree[v].leftChild);
  postorder(tree[v].rightChild);
  answer[2] += v;
}

preorder('A');
inorder('A');
postorder('A');

answer.forEach(a => console.log(a));