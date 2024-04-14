function solution(arr, k) {
    let answer =[]
    arr.map((el)=>{(!answer.includes(el)&&answer.length<k) &&answer.push(el)})
    return [...answer,...Array(k-answer.length).fill(-1)]
}