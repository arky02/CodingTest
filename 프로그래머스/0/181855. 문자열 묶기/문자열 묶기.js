function solution(strArr) {
    var answer = 0;
    let ans = new Array(31).fill(0);
    for(const str of strArr){
        ans[str.length]++;
    }
    for(const temp of ans){
        if(temp > answer) answer = temp;
    }
    return answer;
}