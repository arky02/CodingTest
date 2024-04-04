function solution(answers) {
    let answer = [0,0,0];
    const p1 = [1,2,3,4,5], p2=[2,1,2,3,2,4,2,5], p3=[3,3,1,1,2,2,4,4,5,5];
    
    answers.map((ans,idx)=> {
       if(ans === p1[idx%5]) ++answer[0];        
       if(ans === p2[idx%8]) ++answer[1];
       if(ans === p3[idx%10]) ++answer[2];
    })
    return answer.map((el, idx)=> el === Math.max(...answer) ? idx+1 : 0 ).filter((el)=> el!==0);
}