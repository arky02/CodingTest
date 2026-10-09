# (h,w) -> (h-1,w) (h+1,w) (h,w-1) (h,w+1) 
def isInBoard(x,y,n):
    if x >= 0 and x<n and y>=0 and y<n: return True
    else: return False

def solution(board, h, w):
    answer = 0
    
    x1 = board[h-1][w] if isInBoard(h-1, w, len(board)) else -1
    x2 = board[h+1][w] if isInBoard(h+1, w, len(board)) else -1
    x3 = board[h][w-1] if isInBoard(h, w-1, len(board)) else -1
    x4 = board[h][w+1] if isInBoard(h, w+1, len(board)) else -1
    
    for x in [x1,x2,x3,x4]:
        if x == board[h][w]: answer += 1
    
    return answer

