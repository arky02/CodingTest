function solution(n, m, section) {
    let answer = 0;
    const numArr = Array.from({length: n}, (el,idx)=> section.includes(idx+1) ? idx+1:null);
    for(let i=0; i<n;){
        if(!numArr[i]) i++;
        else{
            ++answer;
            i+=m; 
        }
    }
    return answer;
}