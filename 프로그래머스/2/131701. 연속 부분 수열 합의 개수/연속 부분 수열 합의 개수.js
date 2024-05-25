function solution(elements) {
    const set = new Set();
    for(let i = 0; i< elements.length; i++){
        for(let j = 0; j<elements.length; j++){
            let temp = 0;
            for(let k = j; k<j+i+1; k++){
               temp += elements[k%elements.length]
            }
            set.add(temp);
        }
    }
    return set.size;
}