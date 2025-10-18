function solution(s){
    const res = [...s].reduce((acc, curr)=> {
        if(curr.toLowerCase() === 'p') ++acc.p;
        if(curr.toLowerCase() === 'y') ++acc.y;
        return acc;
    }, {p:0, y:0});


    return res.p === res.y;
}