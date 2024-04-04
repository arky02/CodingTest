function solution(sizes) {
    sizes.map((size)=> size.sort((a,b)=> a-b))
    let max1 = 1, max2 = 1;
    sizes.map((size)=> {
        if(size[0]>max1) max1 = size[0]
        if(size[1]>max2) max2 = size[1]
    })
    return max1*max2;
}