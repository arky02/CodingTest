from collections import deque

def canChange(w1, w2):
    diff_cnt = 0
    for idx,i in enumerate(w1):
        if i!=w2[idx]: diff_cnt = diff_cnt + 1
    if diff_cnt == 1:
        return True
    return False

def solution(begin, target, words):
    visited = [begin]
    queue = deque([(begin,[begin])])
    wordDict = {begin:[]}
    for w in words:
        wordDict[w] = []
    
    for i in [begin,*words]:
        for j in words:
            if i==j: continue
            if canChange(i,j): 
                wordDict[i].append(j)

    while queue:
        curr, path = queue.popleft()
        
        for nxt in wordDict[curr]:
            if nxt in visited:
                continue
            
            if nxt == target:
                return len(path)
            
            visited.append(nxt)
            queue.append((nxt, [*path,nxt]))

    return 0