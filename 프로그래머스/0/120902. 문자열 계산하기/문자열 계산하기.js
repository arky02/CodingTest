function solution(my_string) {
    const arr = my_string.split(' ');
    let result = +arr[0];
    
    for(let i = 1; i< Math.ceil(arr.length/2); i++){
        arr[2*i-1] === '+' ? result += + arr[2*i] : result -= +arr[2*i]
    }
    
    return result;
}