export function getInterpolationAnimation(arr,x,animation){
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
       const rangeDelta = arr[right] - arr[left];
       const indexDelta = right - left;
       const valueDelta = x - arr[left];
       if (valueDelta < 0) {
          return animation;
       }
       if (!rangeDelta) {
        if(arr[left]==x){
            animation.push([left,x]);
        }
        return animation; 
       }
       const middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);
       if (arr[middleIndex] == x) {
        animation.push([middleIndex,x]);
          return animation;
       }
       animation.push([middleIndex]);
       if (arr[middleIndex] < x) {
          left = middleIndex + 1;
       } else {
          right = middleIndex ;
       }
    };
    return animation;
}