import math

def solution(progresses, speeds):
    answer = []
    max = -1
    
    for i in range(len(progresses)):
        t = math.ceil((100-progresses[i])/speeds[i])
        if t>max:
            max = t
            answer.append(1)
        else:
            answer[len(answer)-1] += 1
        
    return answer