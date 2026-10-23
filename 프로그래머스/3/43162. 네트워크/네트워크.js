function dfs(curr, visited, map){
    const nextStep = map[curr] 
    
    for(n of nextStep){
        if(!visited.includes(n)){
            visited.push(n)
            console.log(visited)
            dfs(n, visited, map)
        }
    }
}

function solution(n, computers) {
    const arr = Array.from({length: computers.length}, (_, idx)=> [idx, []])
    const map = Object.fromEntries(arr)
    let ans = 0

    computers.map((el, idx)=> {
        el.map((i,compIdx)=> {
            if(i && compIdx!==idx) map[idx].push(compIdx);
        })
    })
    
    const visited = []
    for(let i=0; i<n; i++){
        if(!visited.includes(i)){
            ans++;
            visited.push(i);
            dfs(i, visited, map);
        }
    }
    return ans
}