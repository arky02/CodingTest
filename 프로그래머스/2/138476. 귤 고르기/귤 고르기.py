def solution(k, tangerine):
    answer = 0
    t = {}
    
    for x in tangerine:
        if x not in t:
            t[x] = 1
        else:
            t[x] += 1
            
    t_list = list(t.items())
    t_list.sort(key=lambda x:x[1], reverse=True)
    
    for x in t_list:
        k -= x[1]
        answer += 1
        if k <= 0: return answer