function solution(food) {
    var answer = [];
    food = food.slice(1).map((el)=> Math.floor(el/2));
    food.map((el, idx)=> {
        answer = [...answer, ...Array(el).fill(idx+1)]
    })
    return answer.join('')+'0'+answer.reverse().join('');
}