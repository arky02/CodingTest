function solution(s) {
    const len = s.length;
    if(len%2){ // 홀수
        return s[(len-1)/2];
    }else{ // 짝수
        return s[(len/2)-1]+s[len/2];
    }
}