
/*
Selection Sort → Repeatedly find the smallest element and put it in its correct position.
Idea: Select min and place it at start.
*/

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr, size) {
    for (let i = 0; i < size - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
}

let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
selectionSort(arr, arr.length);
console.log(arr);
