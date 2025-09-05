
// Idea:
// 🎯 Pick a pivot element → choose randomly (ideally: last).
// 🔍 Count / partition → move how many elements are smaller than the pivot.
// 📍 Place pivot in correct position → after count+1.
// ❓ Left & right may still be unsorted → we don’t know if they’re sorted yet.
// ✅ But pivot is guaranteed sorted → it’s in its final correct place in the array.


function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, start, end) {
    let pivot = arr[end];                   // choose last element
    let pivotCorrectIndex = start;           // boundary of "smaller than pivot"

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pivotCorrectIndex); // smaller element put in the left side
            pivotCorrectIndex++;
        }
    }

    swap(arr, pivotCorrectIndex, end); // place pivot in correct position
    return pivotCorrectIndex;          // return pivot index
}


function quickSort(arr, start, end) {
    if(start >= end) return;
    let pivotIndex = partition(arr, start, end);
    // pivotIndex is in the correct position now just handle left or right part 
    quickSort(arr, start, pivotIndex-1);
    quickSort(arr, pivotIndex+1, end);
}


let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let arr = [5,4,3,2,1];
quickSort(arr, 0, arr.length-1);
console.log(arr);