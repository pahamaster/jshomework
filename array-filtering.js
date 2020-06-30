const mixedArray=[3, 13, 74, 14, 5, 8, 86, 102, 0, 7, 12];

const isEven=num=>{
  return num % 2 ===0;
}

const filterArray=(arrayToFilter, filterFn)=>{
  const filteredArray=[];
  arrayToFilter.forEach(num=>{
    if (filterFn(num)){
      filteredArray.push(num);
    }
  })
  return filteredArray;
}

console.log(filterArray(mixedArray, isEven))