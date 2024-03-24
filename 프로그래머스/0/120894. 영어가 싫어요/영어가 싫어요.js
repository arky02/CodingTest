function solution(numbers) {
    var answer = 0;
    const numList = [['zero',0],['one',1],['two',2],['three',3],['four',4],['five',5],['six',6],['seven',7],['eight',8],['nine',9]]
    numList.map((num)=> {numbers = numbers.replace(new RegExp(`${num[0]}`, 'g'), `${num[1]}`)})
    return +numbers;
}