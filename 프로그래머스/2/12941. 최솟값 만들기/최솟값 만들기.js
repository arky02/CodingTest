function solution(a,b){
    var answer = 0;
    
    a.sort((i,j)=> i-j);
    b.sort((i,j)=> j-i);
    
    const plus_list = a.map((num, idx)=> num*b[idx])

    return plus_list.reduce((a,b)=> a+b);
}