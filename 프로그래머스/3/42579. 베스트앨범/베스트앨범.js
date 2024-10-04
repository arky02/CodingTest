function solution(genres, plays) {  
    
    let genreRank = [];
    
    const map = new Map();
    for(let i = 0; i<genres.length ; i++){
        if(!map.has(genres[i])){
            map.set(genres[i], [[plays[i],i]])
        }else{
            map.get(genres[i]).push([plays[i],i])
            map.get(genres[i]).sort((a,b)=>b[0]-a[0])
        }
        
    }
    console.log(map)
    
    let genresArray = [...new Set(genres)];
    const sorted = genresArray.sort((a,b)=> map.get(b).reduce((acc,curr)=> acc+curr[0],0) - map.get(a).reduce((acc,curr)=> acc+curr[0],0));
    
    
    
    const ans = sorted.map((el)=>{
        const temp = map.get(el).slice(0,2).map((i)=> i[1])
        return temp
    })
    return ans.flat()

}