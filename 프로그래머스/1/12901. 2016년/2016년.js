function solution(a, b) {
    const DAY = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const date = new Date(2016,a-1,b,9);
    return DAY[date.getDay()];
}