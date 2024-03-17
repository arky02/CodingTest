function solution(numLog) {
    let answer = '';
    numLog.map((_, idx)=> {
        switch(numLog[idx+1] - numLog[idx]){
            case 1: 
                answer += "w";
                break;
            case -1: 
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;
        }
    })
    return answer;
}