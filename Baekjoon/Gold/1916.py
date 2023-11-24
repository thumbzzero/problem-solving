import sys
from heapq import heappush, heappop

def solution():
    N = int(input())
    M = int(input())
    bus = [list(map(int, sys.stdin.readline().split())) for _ in range(M)]
    A, B = map(int, input().split(' '))

    graph = {}

    for source, goal, cost in bus:
        if (source not in graph):
          graph[source] = [{ 'goal': goal, 'cost': cost }]
        else:
          for b in graph[source]:
             if (b['goal'] == goal):
                b['cost'] = min(b['cost'], cost)
                break
          graph[source].append({ 'goal': goal, 'cost': cost })

    pq = []
   
    costs = [float('inf')] * (N+1)
    costs[A] = 0

    heappush(pq, [0, A])

    while (len(pq) >= 1):
        curCost, curV = heappop(pq)
        if (curV in graph):
          for bus in graph[curV]:
            goal, cost = bus.values()
            if (curCost + cost < costs[goal]):
                costs[goal] = curCost + cost
                heappush(pq, [curCost + cost, goal])
        
    print(costs[B])

solution()