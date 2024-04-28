function solution(k, score) {
    let ans = [];
    return score.map((el)=> {
        ans = ans.sort((a,b)=> b-a)
        if(ans.length < k) ans.push(+(el))
        else if(ans.length >= k && ans[k-1]<= +(el)) {ans.pop(); ans.push(el)}
        return Math.min(...ans);
    })
    
}