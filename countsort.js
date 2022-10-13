export function getCountSortAnimations(array) {
    const animations=[];
    const findMaximum = arr => arr.reduce((acc, val) => val > acc ? val: acc, Number.MIN_VALUE)
    const max=findMaximum(array);
    const counts = new Array(max + 1);
   counts.fill(0);
   array.forEach(value => counts[value]++);
   const res = [];
   let resultIndex = 0;
   counts.forEach((count, index) => {
    let temp=[];
      for (let i = 0; i < count; i++) {
        temp.push(index);
         res[resultIndex] = index;
         resultIndex++;
      };
      if(temp.length>=1)
        animations.push(temp);
   });

   return animations;
}