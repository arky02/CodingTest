function solution(n) {
    let answer = 0;
    for(let i = n; i>0; i--){
        let res = 0;
        for(let j = i; j>0; j--){
            res +=j;
            res === n && answer++;
            if(res>n)break;
        }
    }
    return answer;
}