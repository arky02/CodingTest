# (h,w) -> (h-1,w) (h+1,w) (h,w-1) (h,w+1) 
def solution(board, h, w):
    dr, dc = [-1, 1, 0, 0], [0, 0, -1, 1]
    n = len(board)
    answer = 0
    
    for i in range(4):
        x, y = h+dr[i], w+dc[i]
        if 0<=x<n and 0<=y<n:
            if board[x][y] == board[h][w]: answer += 1 
            
    return answer
        
        
