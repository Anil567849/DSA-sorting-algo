

// 🔹 Steps
// Find the range → minimum and maximum values in the array.
// Count frequencies → make a count[] array where count[v] = how many times value v appears.
// Build output → fill elements into the correct sorted position using the counts.

function getCount(arr, start, end, val) {
    let count = 0;
    while(start < end){
        if(arr[start] == val) count++;
        start++;
    }
    return count;

    // one line code 
    // return arr.filter((a) => a == val).length;
}

function getValue(arr, start, end){
    let minVal = Infinity, maxVal = -Infinity;
    for(let i = start; i < end; i++){
        if(arr[i] < minVal) minVal = arr[i];
        if(arr[i] > maxVal) maxVal = arr[i];
    }
    return [minVal, maxVal];


    // one line code:
    // return [Math.min(...arr), Math.max(...arr)]
}

function countSort(arr, start, end) {
    let valueToCountMap = {}
    let [minVal, maxVal] = getValue(arr, start, end);

    for(let i = minVal; i <= maxVal; i++){
        valueToCountMap[i] = getCount(arr, start, end, i);
    }

    let index = 0;

    for(let i = minVal; i <= maxVal; i++){
        if(valueToCountMap[i] != 0){
            let count = valueToCountMap[i];
            while(count--){
                arr[index++] = i;
            }
        }
    }
    
}


let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
countSort(arr, 0, arr.length);
console.log(arr);