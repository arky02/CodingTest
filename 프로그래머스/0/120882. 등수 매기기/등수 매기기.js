function solution(score) {
    const highScoreSortedArr = score.map(([score1,score2],idx)=> [idx+1,(score1+score2)/2]).sort((a,b)=> b[1]-a[1])
    
    let rank = 0,dup_count = 0,prev_score = -1;
    return highScoreSortedArr.map((el)=> {
        if(el[1] !== prev_score) {rank +=1 + dup_count; dup_count = 0}
        else dup_count++;
        el.push(rank)
        prev_score = el[1];
        return el
    }).sort((a,b)=> a[0]-b[0]).map((el)=>el[2])

}