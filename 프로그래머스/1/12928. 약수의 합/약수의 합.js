function solution(n) {
    return Array.from({length: n}, (_,idx)=> n%(idx+1) === 0 ? idx+1 : 0).reduce((acc, curr)=> acc+=curr, 0);
}