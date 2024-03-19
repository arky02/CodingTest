
function solution(s) {
    let answer = [], zeroSum = 0, iterateCount = 0;
    
    while(s !== '1'){
        s = s.split('').filter((x)=> { if(x === '0') zeroSum++; return x !== '0' }).length.toString(2);
        iterateCount++;
    }
    
    return [iterateCount, zeroSum];
}