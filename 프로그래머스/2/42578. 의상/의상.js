function solution(clothes) {
    let map = new Map();
    clothes.map((el)=> {
        map.has(el[1]) ? map.set(el[1],map.get(el[1])+1) : map.set(el[1],2);
    })
    return [...map.values()].reduce((a,c)=>a*c,1)-1
}