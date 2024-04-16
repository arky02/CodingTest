function solution(chicken) {
    let 쿠폰 = 0, answer = 0
    while(chicken > 0 ){
        쿠폰 += chicken%10;
        chicken = Math.floor(chicken/10);
        answer += chicken
    }

    
    answer += Math.floor(쿠폰/10) + Math.floor((Math.floor(쿠폰/10)+쿠폰%10)/10);
    return answer;
}