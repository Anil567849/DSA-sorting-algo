

/* 
bucket size & bucket count
if there are 10 elements,
bucket size 2,
then bucket count = 5;

Idea: calculate values such that certain range values will place in particular bucket.

eg: bucket 1 -> [0 to 5]
    bicket 2 -> [6 to 10] ...

    bucket 1 all values < bucket 2 all values < ...

    sort each bucket individually and merge into one.
*/

function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) return arr;

    // Find min and max
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    // Initialize buckets
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = Array.from({ length: bucketCount }, () => []);

    // Distribute elements into buckets
    for (let num of arr) {
        let index = Math.floor((num - min) / bucketSize);
        buckets[index].push(num);
    }

    // Sort each bucket and concatenate
    arr.length = 0; // clear original array
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b); // you could use insertion sort here
        arr.push(...bucket);
    }

    return arr;
}

// Example usage:
// let arr1 = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];
// let arr2 = [34, 23, 54, 12, 9, 87, 45, 67, 21];
let arr2 = [5, 3, 4, 2, 1];

// console.log(bucketSort(arr1)); // decimals
console.log(bucketSort(arr2, 3)); // integers with bucketSize=10
