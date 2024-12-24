# node.js 제출 시 메모리 초과 나는 문제

import sys

N = int(input())
input = list(map(int, sys.stdin.readline().split()))

answer = []
idx = -1
count = -1
delta = 0

balloons = []

for i in range(N):
    balloons.append({ 'num': i+1, 'delta': input[i], 'removed': False })

def getNextIndex(currentIndex, isPositive):
    if isPositive:
      return 0 if currentIndex == N-1 else currentIndex + 1
    return N-1 if currentIndex == 0 else currentIndex - 1

while len(answer) < N:
   idx = getNextIndex(idx, delta >= 0)
   if (balloons[idx]['removed'] == False):
      count += 1
      if (abs(delta) == count):
        answer.append(str(balloons[idx]['num']))
        balloons[idx]['removed'] = True
        delta = balloons[idx]['delta']
        count = 0
      
print(' '.join(answer))
