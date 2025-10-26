function solution(s) {
    const answer = [...s].reduce((acc, curr, idx)=> {
         const index = [...s].slice(0,idx).reverse().findIndex(n => n == s[idx]);
         acc.push(index !== -1 ? index+1 : -1);
        return acc;
    }, []  )
    return answer;
}