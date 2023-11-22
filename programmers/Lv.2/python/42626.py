from heapq import heappush, heappop

def solution(scoville, K):
    answer = 0
    heap = []
    
    for s in scoville:
        heappush(heap, s)
    
    while (heap[0] < K and len(heap) >= 2):
        s1 = heappop(heap)
        s2 = heappop(heap)
        heappush(heap, s1 + 2*s2)
        answer += 1
    
    if (heap[0] < K):
        return -1
    
    return answer