const solution = (s) =>  s.split(' ').map((word)=> 
        word.split('').map((char, idx) => idx%2 ? char.toLowerCase() : char.toUpperCase()).join('')).join(' ')