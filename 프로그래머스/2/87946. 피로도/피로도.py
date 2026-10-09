from itertools import permutations

def solution(k, dungeons):
    max = 0
    for i in range(len(dungeons)+1):
        for j in permutations(dungeons,i):
            x, count = k, 0
            for l in j: 
                if x >= l[0]: 
                    x = x-l[1]
                    count += 1
                else: break
            if count > max: max = count
    return max