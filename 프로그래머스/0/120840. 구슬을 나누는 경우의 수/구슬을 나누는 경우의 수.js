function solution(balls, share) {
    const divider = share > (balls - share) ? share: balls-share;
    let a = 1, b = 1;
    for(let i = 0; i< divider; i++){
        a *= balls-i;
        b *= i+1;
    }
    return (a/b).toFixed(0)*1;
}
