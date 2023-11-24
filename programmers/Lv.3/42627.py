from heapq import heappush, heappop

def solution(jobs):    
    jobs.sort()
    count = total = 0
    pq = []
    
    t = i = 0
    
    while (count < len(jobs)):
        while (i < len(jobs) and t >= jobs[i][0]):
            heappush(pq, [jobs[i][1], jobs[i][0]])
            i += 1
        if (len(pq) == 0):
            heappush(pq, [jobs[i][1], jobs[i][0]])
            t = jobs[i][0]
            i += 1
        
        time, request = heappop(pq)
        start = max(t, request)
        end = start + time
        total += (end - request)
        count += 1
        t = end
    
    return total // count