export function getSelectionSortAnimations(array){
    let count=0,animations=[];
   for(let i=0;i<array.length;i++){
    let smallestind=i;
      for(let j=i;j<array.length;j++)
         {
            if(array[j]<array[smallestind]){
            animations.push([j,smallestind]);
            smallestind=j;
            animations.push([j]);
            }
         }
         animations.push([count,smallestind,array[smallestind],array[count]]);
      [array[count],array[smallestind]]=[array[smallestind],array[count]];
    
      count++;
   }

   return animations;
}