function solution(k, tangerine) {
    let countSet = {};
    tangerine.map((el)=> countSet[el] >= 0 ? countSet[el]++ : countSet[el]=1);
    const arr = Object.entries(countSet).sort((a,b)=> b[1]-a[1]);
    
    const answer = arr.reduce((acc, curr)=> {
        if(k<=0) return acc;
        k -= curr[1];
        return ++acc;
    },0);
    return answer;
}