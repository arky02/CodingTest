function solution(arr, query) {
    query.map((el,idx)=> {
        arr = idx%2 ? arr.slice(el) : arr.slice(0,el+1)
    })
    return arr;
}