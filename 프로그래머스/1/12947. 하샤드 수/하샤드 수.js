function solution(x) {
    const sum = [...String(x)].reduce((acc, curr)=> acc += parseInt(curr),0);
    return !(x % sum)
}