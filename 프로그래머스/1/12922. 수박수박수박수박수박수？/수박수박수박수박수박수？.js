function solution(n) {
    return Array.from({length: n}, (_,idx)=> !(idx % 2) ? '수':'박').join('');
}