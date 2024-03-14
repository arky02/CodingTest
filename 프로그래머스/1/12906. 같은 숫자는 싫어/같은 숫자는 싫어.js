function solution(arr)
{
    let answer = [];

    for(num of arr){
        if (answer.length === 0 || answer[answer.length-1] !== num) answer.push(num);
    }
    
    return answer;
}
