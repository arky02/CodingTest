function solution(A, B) {
    let temp = [];
    A=A.split('')
    for(let a = 0; a<B.length; a++){
        if([...temp,...A].join('') === B) return temp.length
        temp.unshift(A.pop())
    }
    return -1;
}