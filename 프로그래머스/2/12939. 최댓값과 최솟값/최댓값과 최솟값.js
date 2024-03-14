function solution(s) {
    const strArr = s.split(" ");
    let min = strArr[0], max = strArr[0];
    for(let i = 1; i<strArr.length; i++){
        if(Number(strArr[i])<=min) min = (strArr[i]);
        if(Number(strArr[i])>=max) max = (strArr[i]);
    }
    return min + " " + max;
}
