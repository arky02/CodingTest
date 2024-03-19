function solution(n, m) {
    let sol = [];
    
    for(let i = n<m ? n: m ; i>= 1; i--){
        if(m%i === 0 && ((n*m)/i)%m === 0 ) {
            sol.push(i,(n*m)/i);
            return sol;
        }
    }
}


