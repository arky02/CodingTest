function solution(arr) {
    if(arr.length <= 1) return [-1];
    const min = arr.reduce((acc, curr)=> curr < acc ? curr : acc , arr[0]);
    return arr.filter((el)=> el !== min);
}