def solution(nums):
    numsSet = set(nums)
    return len(nums)/2 if len(numsSet) > len(nums)/2 else len(numsSet)