def solution(answers):
    answer = []
    answerMarks = {"1": 0, "2": 0, "3": 0}
    
    n1 = [1,2,3,4,5]
    n2 = [2,1,2,3,2,4,2,5]
    n3 = [3,3,1,1,2,2,4,4,5,5]
    
    for idx, n in enumerate(answers):
        if n == n1[idx%len(n1)]:
            answerMarks["1"] += 1
        if n == n2[idx%len(n2)]:
            answerMarks["2"] += 1
        if n == n3[idx%len(n3)]:
            answerMarks["3"] += 1
            
    maxCnt = max(*list(answerMarks.values()))
    
    for key,val in list(answerMarks.items()):
        if val == maxCnt:
            answer.append(int(key))
            
    return answer