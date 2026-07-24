function solution(k, m, score) {
    const appleBox = score.sort((a,b)=> b-a).reduce((acc, curr,idx)=> {
        if(idx%m === 0){
            acc.push([curr]);
        }else{
            acc[Math.floor(idx/m)].push(curr);    
        }
        return acc;
    },[]);

    const result = appleBox.reduce((acc,curr)=> {
        if(curr.length < m) return acc;
        const minScore = Math.min(...curr);
        return acc += minScore*m;
    },0)
    
    return result;
}