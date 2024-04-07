function solution(dots) {
    const res = dots.sort((a,b)=> (a[0]-b[0])+(a[1]-b[1]))
    return Math.abs((res[0][0]-res[3][0])*(res[0][1]-res[3][1]));
}