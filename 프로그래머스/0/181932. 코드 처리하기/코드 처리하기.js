function solution(code) {
    let answer = '';
    let mode = false;
    code.split('').map((el,idx)=> {
        if(+el) mode = !mode
        else if((mode && idx%2) || (!mode && idx%2 === 0)) answer += el
    })
    return answer.length ? answer : 'EMPTY';
}