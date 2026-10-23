function dfs(n, curr, numbers, target){
    if(n == numbers.length) {
        if(curr == target)return 1
        else return 0
    }
    
    let a = dfs(n+1, curr+numbers[n], numbers, target)
    let b = dfs(n+1, curr-numbers[n], numbers, target)   
    
    return a+b
}

function solution(numbers, target) {
    return dfs(0, 0, numbers, target)
}