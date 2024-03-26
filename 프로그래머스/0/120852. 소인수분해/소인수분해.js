function solution(n) {
    var answer = [];
    while(n !== 1){
        for(let i = 2; i<=n; i++){
            if(n%i === 0){
                !answer.includes(i) && answer.push(i);
                n /= i;
                break;
            }
        }
    }
    return answer.sort((a,b)=> a-b);
}