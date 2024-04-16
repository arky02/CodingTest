function solution(progresses, speeds) {
    let answer = [];
    const 작업기간list = progresses.map((el,idx)=> Math.ceil((100-el)/speeds[idx])).reverse()
    while(작업기간list.length>0){
        let temp = 작업기간list.pop()
        let count = 1
        while(작업기간list[작업기간list.length-1]<=temp){
            작업기간list.pop()
            count ++;
        }
        answer.push(count)
    }
    return answer;
}