const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function insertPQ(element) {
  pq.push(element);

  if (pq.length <= 2) return;
  
  let idx = pq.length - 1, parent = Math.floor(idx / 2);
  
  while (pq[idx].cost < pq[parent].cost) {
    pq[idx] = pq[parent];
    pq[parent] = element;
  }
}

function deletePQ() {
  if (pq.length <= 2) return pq.pop();

  let deletedElement = pq[1];
  pq[1] = pq.pop();
  let parent = 1, leftChild = parent * 2, rightChild = leftChild + 1;

  while ((leftChild < pq.length && pq[leftChild].cost < pq[parent].cost) 
    || (rightChild < pq.length && pq[rightChild]?.cost < pq[parent].cost)) {
    let temp = pq[parent];
    if (rightChild >= pq.length || pq[leftChild].cost < pq[rightChild].cost) {
      pq[parent] = pq[leftChild];
      pq[leftChild] = temp;
      parent = leftChild;
    } else {
      pq[parent] = pq[rightChild];
      pq[rightChild] = temp; 
      parent = rightChild;
    }
    leftChild = parent * 2;
    rightChild = leftChild + 1;
  }
  
  return deletedElement;
}

function solution(A, B) {
  insertPQ({ goal: A, cost: 0 });
  
  while (pq.length >= 2) {
    let cur = deletePQ();
    let curV = cur.goal, curCost = cur.cost; 

    graph[curV]?.forEach(({ goal, cost }) => {
      if (curCost + cost < costs[goal]) {
        costs[goal] = curCost + cost;
        insertPQ({ goal: goal, cost: curCost + cost });
      }
    });
  }

  console.log(costs[B] !== Infinity ? costs[B] : 'INF');
}

const [V, E] = input.shift().split(' ').map(Number);
const K = parseInt(input.shift());

let pq = [null];

let graph = {};
input.map((edge) => edge.split(' ').map(Number)).forEach(([source, goal, cost]) => {
  if (graph[source] === undefined) graph[source] = [{ goal, cost }];
  else if ((b = graph[source].find((b) => b.goal === goal)) !== undefined) {
    b.cost = Math.min(b.cost, cost);
  }
  else graph[source].push({ goal, cost });
});

let costs = new Array(V+1).fill(Infinity);
costs[K] = 0;

for (let v=1; v<=V; v++) {
  solution(K, v);
}