export function getInterpolationAnimation(array){
    let lo = 0, hi = array.length-1;

    while (lo <= hi && x >= arr[lo] && x <= arr[hi])
    {
        if (lo == hi)
        {;
            if (arr[lo] == x) return lo;
            return -1
        }
        let pos = lo + (((double)(hi - lo) /
            (arr[hi] - arr[lo])) * (x - arr[lo]));
        if (arr[pos] == x)
            return pos;

        if (arr[pos] < x)
            lo = pos + 1;

        else
            hi = pos - 1;
    }
    return -1;
}