function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((num,idx)=> {
        answer += num*(signs[idx] ? 1: -1);
    })
    return answer;
    
}