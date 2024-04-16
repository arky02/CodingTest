const solution = (n, lost, reserve) => {
    lost.sort((a,b)=> a-b);
    reserve.sort((a,b)=> a-b);
    lost.map((el)=> {if(reserve.includes(el)){
        reserve = reserve.filter((a)=> a!=el)
        lost = lost.filter((a)=> a!=el)
    }})
    
    return n-lost.length+lost.map((도난자,idx)=>{
        let temp = [...reserve]
        if(reserve.includes(도난자-1) || reserve.includes(도난자+1)){
            temp = reserve.filter((여벌학생)=> reserve.includes(도난자-1) ? 여벌학생 != 도난자-1 : 여벌학생 != 도난자+1)
            reserve = [...temp]
            return 1;
        }
        return 0;
        
    }).reduce((a,c)=>a+c)
}