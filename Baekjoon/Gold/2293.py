nk = input().split(' ')
n = int(nk[0])
k = int(nk[1])
v = []
for i in range(n):
    v.append(int(input()))

v.sort()
cache = [0] * (k+1)
cache[0] = 1

def cal(v):
    i = 0
    while (i + v <= k):
        cache[i+v] += cache[i]
        i += 1

for value in v:
    cal(value)

print(cache[k])
