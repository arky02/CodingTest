function solution(arr) {
    let answer = arr;
    
    const colCount = arr.length;
    const rowCount = arr[0].length;
    
    if(colCount>rowCount){
        for(let j = 0; j< colCount; j++){
           for(let i = 0; i< colCount-rowCount; i++){
                answer[j].push(0);
            } 
        }
    }else{
        const blankArr = new Array(rowCount).fill(0)
        for(let i = 0; i< rowCount-colCount; i++){
            answer.push(blankArr)
        }
    }
    return answer;
}