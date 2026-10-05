distance = []

def dfs(numbers, currIdx, currDist):
    if currIdx+1 == len(numbers):
        distance.append(currDist)
        return
    dfs(numbers, currIdx+1, currDist+numbers[currIdx+1])
    dfs(numbers, currIdx+1, currDist+(-1*numbers[currIdx+1]))
    
def solution(numbers, target):
    answer = 0
    
    dfs(numbers, 0, numbers[0])
    dfs(numbers, 0, -1*numbers[0])
    
    for result in distance:
        if result == target:
            answer +=1
        
    return answer