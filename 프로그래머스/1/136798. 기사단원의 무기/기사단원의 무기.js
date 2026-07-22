function solution(number, limit, power) {
    let answer = Array.from({length: number},(el)=>0);
    for(let i=1; i<=number; i++){
        for(let j=1; j<=i; j++){
            if(i%j === 0) ++answer[i-1];
        }
        if(answer[i-1]>limit) answer[i-1]=power;
    }
    return answer.reduce((acc,curr)=> acc+curr,0);
}