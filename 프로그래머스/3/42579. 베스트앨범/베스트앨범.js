function solution(genres, plays) {      
    const map = new Map();
    
    for(let i = 0; i<genres.length ; i++){     
        const newVal = [plays[i],i];
        const currGenre = genres[i];
        
        !map.has(currGenre) ? map.set(currGenre, [newVal]) : map.get(currGenre).push(newVal);
        map.get(currGenre).sort((a,b)=>b[0]-a[0])  ;     
    }
    
    let genreArray = [...new Set(genres)];
    
    const sortedGenreArr = genreArray.sort((a,b)=> map.get(b).reduce((acc,curr)=> acc+curr[0],0) - map.get(a).reduce((acc,curr)=> acc+curr[0],0));
    
   return sortedGenreArr.map((el)=> map.get(el).slice(0,2).map((i)=> i[1])).flat()
}
