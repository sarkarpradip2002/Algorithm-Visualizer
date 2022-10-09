export function getBubbleSortAnimations(array) {
    let animations=[],k=0;
    for(let i=0;i<=array.length-1 ;i++){
        for(let j=0;j<array.length-i-1;j++){
           if(array[j]>array[j+1]){
             animations.push([j,j+1,array[j+1],array[j]]);
             [array[j],array[j+1]]=[array[j+1],array[j]];
           }
        }
    }

    return animations;
}