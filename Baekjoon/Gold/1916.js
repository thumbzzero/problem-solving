const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let pq = [null];

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

function solution() {
  /*
    A: 출발지, B: 도착지
    N: 도시 개수(1~N), M: 버스 개수

    output: A -> B로 가는데 드는 최소 비용
  */
  const [A, B] = input.pop().split(' ').map(Number);
  const [N, M] = [parseInt(input.shift()), parseInt(input.shift())];
  
  let graph = {};
  input.map((bus) => bus.split(' ').map(Number)).forEach(([source, goal, cost]) => {
    if (graph[source] === undefined) graph[source] = [{ goal, cost }];
    else if ((b = graph[source].find((b) => b.goal === goal)) !== undefined) {
      // 시간초과 해결 : 출발지 - 도착지 동일한 버스가 여러 개 있으면 그 중 최소 비용인 버스만 저장
      b.cost = Math.min(b.cost, cost);
    }
    else graph[source].push({ goal, cost });
  });

  let costs = new Array(N+1).fill(Infinity);
  costs[A] = 0;
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

  console.log(costs[B]);
}

solution();