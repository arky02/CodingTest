function solution(n) {
    const sqrt = Math.sqrt(n)
    const isSqrt = !(sqrt%1)
    return isSqrt ? (sqrt+1)*(sqrt+1) : -1;
}