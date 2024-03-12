function solution(arr, queries) {
    for(let query of queries){
        for(let temp = query[0]; temp<=query[1]; temp++){
            if(temp%query[2] === 0) ++arr[temp];
        }
    }
    return arr;
}