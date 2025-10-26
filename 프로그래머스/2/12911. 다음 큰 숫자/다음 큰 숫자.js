function solution(n) {
    const sizeOf1OfN = [...n.toString(2)].reduce((acc, curr)=> curr === '1' ? ++acc:acc, 0);
    let x = n;
    while(x++){
        const sizeOf1OfX = [...x.toString(2)].reduce((acc, curr) => curr === '1' ? ++acc : acc, 0)
        if(sizeOf1OfX === sizeOf1OfN) return x;
    }
}