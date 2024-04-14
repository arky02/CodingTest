const solution = (arr, queries) =>
  queries.map(([s,e,k])=> Math.min(...arr.filter((el,idx)=> idx>=s && idx<=e && el>k))).map((el)=> el === Infinity ? -1 :el)