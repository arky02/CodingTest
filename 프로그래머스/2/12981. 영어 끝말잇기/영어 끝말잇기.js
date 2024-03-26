function solution(n, words) {
    var answer = [];
    let idx = 0;
    
    for(el of words){
        if(answer.includes(el) || (idx !== 0 && words[idx-1][words[idx-1].length-1] !== el[0]))
            return [idx%n+1,Math.floor(idx/n+1)];
        else {answer.push(el); idx++;}
    }
    return [0,0];
}