
/* 
Array = [170, 45, 75, 90, 802, 24, 2, 66]
Sort by ones place → [170, 90, 802, 2, 24, 45, 75, 66]
Sort by tens place → [802, 2, 24, 45, 66, 170, 75, 90]
Sort by hundreds place → [2, 24, 45, 66, 75, 90, 170, 802] ✅
*/


/* 
get digit at a given place (ones=0, tens=1, etc.);
example: 320
    ones: 0
    tens: 2
    hundreds: 3
*/
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/*
count how many digits a number has
example:
    234
    return 3
*/
function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

// find max digits in array
function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function flattenAnArray(arr, ans){
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flattenAnArray(arr[i], ans);
        }else{
            ans.push(arr[i]);
        }
    }
}

// Radix Sort
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        // 10 buckets for digits 0-9
        let buckets = Array.from({ length: 10 }, () => []);
        
        for (let num of arr) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        // Flatten buckets back into arr
        arr = [].concat(...buckets);

        // custom function to flat 
        // let ans = [];
        // flattenAnArray(buckets, ans);
        // arr = ans;
    }

    return arr;
}

// Example
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // [2, 24, 45, 66, 75, 90, 170, 802]
