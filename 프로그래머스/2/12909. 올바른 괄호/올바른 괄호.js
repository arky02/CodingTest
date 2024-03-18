function solution(s){
    let count = 0;
    
    for(let i = 0; i< s.length; i++){
        if(count<0) return false;
        (s[i] === "(") ? ++count : --count;
    }
    
    return (count === 0) ? true : false;
}