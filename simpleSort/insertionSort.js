
/*
Insertion Sort → Insert each element into its correct place among already sorted part.
Idea: Like arranging playing cards in hand.
*/

function insertionSort(arr, size) {
    for (let i = 1; i < size; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // shift element to the right
            j--;
        }
        arr[j + 1] = current; // place current in correct spot
    }
}

let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(arr, arr.length);
console.log(arr);