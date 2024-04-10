function solution(rank, attendance) {
    var answer = [];
    for(let i = 1; i<=rank.length; i++){
        let index = 0;
        rank.map((el,idx)=> {if(Number(el)===i) index = idx})
        attendance[index] && answer.push(index)
    }
    return answer[0]*10000 + answer[1]*100 + answer[2]
}