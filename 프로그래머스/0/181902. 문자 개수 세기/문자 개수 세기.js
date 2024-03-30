function solution(str) {
    let answer = Array(52).fill(0);
    str.split('').map((char)=> answer[char.charCodeAt() >= 97 ? char.charCodeAt()-71 : char.charCodeAt()-65]++)
    return answer;
}