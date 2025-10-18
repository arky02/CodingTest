function solution(arr, divisor) {
    const res = arr.filter((el)=> !(el % divisor)).sort((a,b)=> a-b);
    return !(res.length) ? [-1]: res;
}