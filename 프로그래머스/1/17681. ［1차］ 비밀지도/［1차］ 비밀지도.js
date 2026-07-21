function solution(n, arr1, arr2) {
    const arr1to2 = arr1.map((el)=> el.toString(2).padStart(n,"0"));
    const arr2to2 = arr2.map((el)=> el.toString(2).padStart(n,"0"));
    
    const answer = arr1to2.reduce((acc,curr,idx)=> {
        let tempStr = "";
        let tempArr2to2 = arr2to2[idx];
        curr.split("").forEach((el,index)=> {
            if(el==='0' && tempArr2to2[index] === '0'){
                 tempStr += " ";
            }else{
                tempStr += "#";
            }
        });
        acc.push(tempStr);
        return acc;
    },[])
    return answer;
}