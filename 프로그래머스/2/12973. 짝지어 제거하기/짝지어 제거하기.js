function solution(s)
{
    const arr = [];
    [...s].forEach((el)=> {
        if(arr[arr.length-1] === el) arr.pop();
        else arr.push(el);
    })
    return Number(!arr.length)
}