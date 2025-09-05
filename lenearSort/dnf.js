
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}


function dnf(arr, start, end) {
    let low = start, mid = start, high = end - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else { // mid 2
            swap(arr, mid, high);
            high--;
        }
    }

}


let arr = [1, 1, 2, 0, 0, 1, 2, 2, 1, 0];
dnf(arr, 0, arr.length);
console.log(arr);
