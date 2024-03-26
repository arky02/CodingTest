function solution(arr) {
    for(let i = 1; i<=512; i*=2){
        (arr.length > i && arr.length <= i*2) && arr.push(...Array(i*2-arr.length).fill(0))
        
    }
    return arr;
}