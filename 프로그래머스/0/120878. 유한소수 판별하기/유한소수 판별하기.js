function solution(a, b) {
    let answer = 0, has약수 = true
    while(has약수){
        has약수 = false
        for(let i = 2; i<=a; i++){
            if(a%i==0 && b%i==0){
                a /= i;
                b /= i;
                has약수 = true;
            }
        }
    }
    for(let i = 3; i<=b;i++){
        if(i !== 5 && b%i == 0&& isPrime(i)) return 2;
    }
    return 1;
}

function isPrime(num) {
  if(num === 2)
  return true;

  for(let i = 2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}