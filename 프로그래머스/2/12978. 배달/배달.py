import heapq

def solution(N, road, K):
    r_dict = {}
    dist = [float('inf')]*N
    
    for x,y,t in road:
        if x not in r_dict: r_dict[x] = [[y,t]]
        else: r_dict[x].append([y,t]) # [다음 경로, 걸리는 시간]
        
        if y not in r_dict: r_dict[y] = [[x,t]]
        else: r_dict[y].append([x,t]) 
        
        
    h = []
    heapq.heappush(h,[0,1]) # [걸리는 시간, 마을]
    dist[0] = 0
    
    while h:
        c_t, c_y = heapq.heappop(h)
        next_steps = r_dict[c_y]
        for n_y,n_t in next_steps:
            updated_t = n_t+c_t
            if updated_t < dist[n_y-1]:
                dist[n_y-1] = updated_t
                heapq.heappush(h,[updated_t, n_y])
                
    return len(list(filter(lambda x: x<=K, dist)))