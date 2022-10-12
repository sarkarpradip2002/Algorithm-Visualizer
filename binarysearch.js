export function getBinaryAnimation(start,end,array,target,animations)
{
    let mid=Math.floor((start+end)/2);
    animations.push(mid);
    if(array[mid]==target)
      return animations;
    else if(start==mid)
    return animations;
    else if(array[mid]>target){
      return getBinaryAnimation(start,mid,array,target,animations);
    }
    else{
        return getBinaryAnimation(mid+1,end,array,target,animations);
    }
}