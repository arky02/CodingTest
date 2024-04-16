function solution(k, dungeons) {
    let res = []
    permutation([],dungeons,res)
    const ansList = res.map((el)=>isAble(k,el).length)
    return dungeons.length-Math.min(...ansList)

}

function permutation(permu, rests, res){
    if (rests.length == 0) {
        return res.push(permu);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        permutation([...permu,v], rest, res);
    })
}

function isAble(k,list){
    return list.map(([minHP, minusHP],idx)=> {
        const res = k>=minHP && k-minusHP>0;
        k -= minusHP;
        return res
    }).filter((el)=> !el)
}