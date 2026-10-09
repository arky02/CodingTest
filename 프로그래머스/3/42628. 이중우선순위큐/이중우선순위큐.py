import heapq 

def solution(operations):
    h = []
    
    while operations: 
        op, x = operations.pop(0).split(" ")    
        if op == "I":
            heapq.heappush(h,int(x))
        elif op == "D" and x == "-1":
            if len(h) > 0: heapq.heappop(h)
        elif op == "D" and x == "1":
            if len(h) > 0:
                largest = max(h)
                h.remove(largest)
                heapq.heapify(h)
        
    return [max(h), min(h)] if len(h) > 0 else [0,0]