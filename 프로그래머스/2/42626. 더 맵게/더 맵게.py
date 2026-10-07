import heapq

def solution(scoville, K):
    length = len(scoville)
    heapq.heapify(scoville)
    
    for i in range(0,length):
        min1 = heapq.heappop(scoville)
        if min1 >= K: return i
        elif len(scoville) == 0: return -1
    
        min2 = heapq.heappop(scoville)
        heapq.heappush(scoville, min1+min2*2)
    
    return -1