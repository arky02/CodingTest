const dx = [1,-1,0,0]
const dy = [0,0,1,-1]

// 오른쪽 = [0][1]
// 왼쪽  = [0][-1]
// 뒤 = [-1,0]
// 앞 = [+1,0]

function bfs(maps){
    const queue = [[0,0,1]]
    let visited = Array.from({length: maps.length}, ()=> Array(maps[0].length).fill(false))
    visited[0][0] = true

    let head = 0
    
    while(head < queue.length){
        const [x,y,dist] = queue[head++]
        
        if(x==maps[0].length-1 && y==maps.length-1) return dist
        
        for(let i=0; i<4; i++){
            const nextX = x+dx[i]
            const nextY = y+dy[i]
            
            if(nextX<0||nextX>=maps[0].length||nextY<0||nextY>=maps.length) continue;
            
            if(maps[nextY][nextX] === 1){
                if(!visited[nextY][nextX]){
                    visited[nextY][nextX] = true
                    queue.push([nextX, nextY, dist+1])    
                }
            }
            
        }
        
    }
    return -1
    
}

function solution(maps) {
    
    return bfs(maps)
}