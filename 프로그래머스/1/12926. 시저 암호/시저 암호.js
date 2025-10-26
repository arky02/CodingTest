function solution(s, n) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    const res = s.split('').map((el)=> {
        if(el === " ") return el; 
        const isUpperCase = el.toUpperCase() === el;
        const idx = (alphabet.indexOf(el.toUpperCase())+n)%26;
        const temp = alphabet[idx];
        
        return isUpperCase ? temp : temp.toLowerCase();
    })
    return res.join('');
}