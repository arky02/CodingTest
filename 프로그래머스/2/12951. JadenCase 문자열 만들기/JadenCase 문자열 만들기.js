function solution(s) {
    let answer = '';
    const strArr = s.split(" ");
  
    for(let i = 0; i< strArr.length; i++){
        const letterArr = strArr[i].split('');
        
        if(letterArr === []) {answer += " "; continue;}
        
        const resultArr = letterArr.map((letter)=> letter.toLowerCase())
        if(isNaN(letterArr[0])) resultArr[0] = letterArr[0]?.toUpperCase();
        
        answer += resultArr.join('') + (i === strArr.length-1 ? "" : " ");
    }
    return answer;
}
