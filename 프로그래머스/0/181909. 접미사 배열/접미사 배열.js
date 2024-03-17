function solution(my_string) {
    const strDic = [];
    for(let i = 1; i<= my_string.length; i++) strDic.push(my_string.slice(i*-1));

    return strDic.sort();
}