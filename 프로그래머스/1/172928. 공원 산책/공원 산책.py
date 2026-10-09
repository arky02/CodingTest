pos = {
    "N": [-1, 0],
    "S": [1, 0],
    "W": [0, -1],
    "E": [0, 1],
}

def solution(park, routes):
    answer = []
    curr_step = []
    h, w = len(park), len(park[0])
    
    for idx, i in enumerate(park):
        if "S" in i: 
            curr_step = [idx, i.find("S")]
            break
            
    while routes:
        route = routes.pop(0)
        op, n = route.split(" ")
        prev_step = curr_step

        for i in range(int(n)):
            x, y = curr_step[0]+pos[op][0], curr_step[1]+pos[op][1]
            if h<=x or x<0 or w<=y or y<0 or park[x][y] == "X": 
                curr_step = prev_step
                break
            curr_step = [x,y]
                    
    return curr_step