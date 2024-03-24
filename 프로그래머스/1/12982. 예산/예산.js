function solution(d, budget) {
    let result = 0;
    d.sort((a,b)=> a-b).reduce((acc,curr)=> {if(acc+curr>budget){return acc} else{++result; return acc+curr}},0)
    return result;
}