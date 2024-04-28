function solution(name, yearning, photo) {
    let mapEl = new Map();
    name.map((el, idx)=> mapEl.set(el,yearning[idx]))
    return photo.map((el)=> {
        let tempSum = 0;
        el.map((e)=> {if(mapEl.has(e)) tempSum += mapEl.get(e)})
        return tempSum;
    })
}