const solution = (str) => str.replace(/[a-z|A-Z]/gi, ',').split(',').reduce((acc,curr)=>acc+Number(curr) ,0)
