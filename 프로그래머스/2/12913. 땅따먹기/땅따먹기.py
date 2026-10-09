import math

def solution(land):
    acc = []
    for i, l in enumerate(land):
        if i == 0: acc = [l]
        else: 
            for j in range(4):
                temp = [*acc[i-1]]
                temp.pop(j)
                max_val = max(*temp)
                if j == 0: acc.append([max_val + l[j]])
                else: acc[i].append(max_val+l[j])
    return max(acc[-1])