export function getBruteForceAnimations(array,number){
   let animations=[];
   for(let i=0;i<array.length;i++){
      if(array[i]==number)
        {
            animations.push([i,number]);
            break;
        } 
        animations.push([i]);      
   }

   return animations;
}