function solution(spell, dic) {
    let spellCount = Array(spell.length);
    
    for(word of dic){
        spellCount.fill(0);
        for(let i = 0; i< word.length; i++){
            spell.map((spellChar, idx) => { spellChar === word[i] && spellCount[idx]++; })
        }
        if(spellCount.filter((count)=>count === 1).length == spell.length) return 1;
    }
    
    return 2;
}