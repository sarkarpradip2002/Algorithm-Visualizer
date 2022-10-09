export function getInsertionSortAnimations(array){
    let animations=[];
    for(let i=1;i<array.length;i++){
        let take=array[i],j;
         for( j=i-1;j>=0;j--){
             if(take<array[j]){
                animations.push([j+1,j,array[j]]);
               array[j+1]=array[j];
             }
            else
               break;
         }
         
         if(j>=0)
           animations.push([j+1,j,take]);
         else
         animations.push([j+1,0,take]);

         array[j+1]=take;

    }

    return animations;

}