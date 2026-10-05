answer = 0

def dfs(nums, idx, acc, target):
    ret = 0
    
    if idx == len(nums):
        if acc == target: return 1
        return 0
    
    ret += dfs(nums, idx+1, acc+nums[idx], target)
    ret += dfs(nums, idx+1, acc+(-1*nums[idx]), target)
    
    return ret
    
def solution(numbers, target):
    answer = dfs(numbers, 0, 0, target)
    return answer