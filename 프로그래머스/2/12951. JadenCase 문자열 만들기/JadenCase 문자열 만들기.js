function solution(s) {
    var answer = '';
    const strArr = s.split(" ");
  
    for(let i = 0; i< strArr.length; i++){
        const letterArr = strArr[i].split('');
        if(letterArr === []) {answer += " "; continue;}
        let newArr = [];
        if(!isNaN(letterArr[0])){
            newArr = letterArr.map((letter)=> letter.toLowerCase())
        } 
        else{
            newArr = letterArr.map((letter)=> letter.toLowerCase())
            newArr[0] = letterArr[0]?.toUpperCase();
        }
        answer += newArr.join('') + (i === strArr.length-1 ? "" : " ");
    }
    return answer;
}