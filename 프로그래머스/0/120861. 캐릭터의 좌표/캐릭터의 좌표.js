function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.map((key)=> {
        switch(key){
            case 'left':
                if(answer[0] > (board[0]-1)/2*-1) answer[0] -= 1;
                break;
            case 'right':
                if(answer[0] < (board[0]-1)/2) answer[0] += 1;
                break;
            case 'up':
                if(answer[1] < (board[1]-1)/2) answer[1] += 1;
                break;
            case 'down':
                if(answer[1] > (board[1]-1)/2*-1) answer[1] -= 1;
                break;
        }
    })
    
    return answer;
}