from collections import deque

dx = [1, -1, 0, 0]
dy = [0 ,0, 1, -1]

def solution(maps):
    queue = deque([[0,0,1]]) # init state
    visited = {(0,0)}
    n, m = len(maps[0]), len(maps)
    
    while queue:
        x, y, count = queue.popleft() # 0,0,0
        if x == m-1 and y == n-1: 
            return count
        
        for i in range(4):
            next_x, next_y = x+dx[i], y+dy[i] # 1,0
            if 0 <= next_x < m and 0 <= next_y < n and maps[next_x][next_y] == 1:
                if (next_x, next_y) in visited: continue
                queue.append([next_x, next_y, count+1])
                visited.add((next_x, next_y))
                
    return -1