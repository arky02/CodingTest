function solution(nums) {
    const numSet = new Set([...nums])
    return numSet.size > nums.length/2 ? nums.length/2 : numSet.size
}