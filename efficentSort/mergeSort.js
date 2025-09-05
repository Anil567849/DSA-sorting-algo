

function merge(arr, start, mid, end){
    let newArr = [];

    let i = start, j = mid;
    while(i < mid && j <= end){
        if(arr[i] <= arr[j]){
            newArr.push(arr[i]);
            i++;
        }else{
            newArr.push(arr[j]);
            j++;
        }
    }

    while(i < mid){
        newArr.push(arr[i]);
        i++;
    }

    while(j <= end){
        newArr.push(arr[j]);
        j++;
    }

    for(i = 0; i < newArr.length; i++){
        arr[i+start] = newArr[i];
    }

}


function divide(arr, start, end){
    if(start >= end) return;
    let mid = Math.floor((start+end)/2);
    divide(arr, start, mid);
    divide(arr, mid+1, end);
    merge(arr, start, mid+1, end);
}



let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let arr = [5,4,3,2,1];
divide(arr, 0, arr.length-1);
console.log(arr);