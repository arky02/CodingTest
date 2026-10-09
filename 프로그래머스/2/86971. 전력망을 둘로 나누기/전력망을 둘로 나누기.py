import copy

def dfs(curr, cnt, w, visited):
    next_step = w[curr] # [1, 2, 4]
    
    for step in next_step:
        if step in visited: continue
        
        visited.append(step)
        dfs(step, cnt+1, w, visited)
    return len(visited)

def solution(n, wires):
    w = {}
    visited = []
    min_diff = n
    
    for [k,v] in wires:
        if k not in w: w[k] = [v]
        else: w[k].append(v)
            
        if v not in w: w[v] = [k]
        else: w[v].append(k)
    
    while wires:
        r_k, r_v = wires.pop()
        temp_w = copy.deepcopy(w)
        temp_w[r_k].remove(r_v)
        temp_w[r_v].remove(r_k)
        
        result = dfs(1, 1, temp_w, [1])
        diff = abs(result-(n-result))
        if diff < min_diff: min_diff = diff
        
    return min_diff