
/* 
Bubble Sort → Repeatedly swap adjacent elements if they are in the wrong order.
Idea: Push the largest element to the end in each pass.
Like bubbles rising up.
*/


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 1; j < (size - i); j++) {
            if (arr[j - 1] >= arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
}

let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(arr, arr.length);
console.log(arr);