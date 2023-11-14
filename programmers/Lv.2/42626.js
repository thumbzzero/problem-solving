let heap = [-1];

function insertHeap(element) {
    heap.push(element);
    let idx = heap.length - 1;
    let parentIdx = Math.floor(idx / 2);
    
    while (element < heap[parentIdx]) {
        heap[idx] = heap[parentIdx];
        heap[parentIdx] = element;
        idx = parentIdx;
        parentIdx = Math.floor(idx / 2);
    }
}

function deleteHeap() {
    if (heap.length <= 2) return heap.pop();
    
    let deletedElement = heap[1];
    heap[1] = heap.pop();
    let parentIdx = 1;
    let leftChildIdx = parentIdx * 2, rightChildIdx = leftChildIdx + 1;

    while (leftChildIdx < heap.length && heap[leftChildIdx] < heap[parentIdx] 
           || heap[rightChildIdx] < heap[parentIdx]) {
        let temp = heap[parentIdx];
        if (rightChildIdx >= heap.length 
            || heap[leftChildIdx] < heap[rightChildIdx]) {
            heap[parentIdx] = heap[leftChildIdx];
            heap[leftChildIdx] = temp;
            parentIdx = leftChildIdx;
        } else {
            heap[parentIdx] = heap[rightChildIdx];
            heap[rightChildIdx] = temp;
            parentIdx = rightChildIdx;
        }
        leftChildIdx = parentIdx * 2;
        rightChildIdx = leftChildIdx + 1;   
    }
    return deletedElement;
}

function solution(scoville, K) {
    let answer = 0;
    
    scoville.forEach((s) => insertHeap(s));
   
    while (heap[1] < K && heap.length > 2) {
        let s1 = deleteHeap();
        let s2 = deleteHeap();
        insertHeap(s1 + 2 * s2);
        answer++;
    }
    
    if (heap.at(-1) < K) return -1;
    return answer;
}