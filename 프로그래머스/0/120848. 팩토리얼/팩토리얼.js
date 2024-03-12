function solution(n) {
    let answer = 1;
    let i = 1;
    for(; i<= 10; i++){
        if(answer*i <= n && n < answer*i*(i+1)) break;
        answer *= i;
    }
    return i;
}