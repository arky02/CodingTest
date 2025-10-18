function solution(a, b, ans = 0) {
    if(a>b){
        const temp = b;
        b = a;
        a = temp;
    }
    for(let i=a; i<=b; i++){
        ans +=i;
    }
    return ans;
}