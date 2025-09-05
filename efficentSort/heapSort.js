
/*
Max-heap 🔼
Every parent node is greater than or equal to its children.
So the largest element is always at the root (index 0).

Min-heap 🔽
Every parent node is less than or equal to its children.
So the smallest element is always at the root.
*/


function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Max Heap 
function heapify(arr, i, n) {
    
    let root = i; // it should be largest than the all child nodes
    let leftNode = 2*i + 1;
    let rightNode = 2*i + 2;

    if(leftNode < n && arr[root] < arr[leftNode]){
        root = leftNode;
    }

    if(rightNode < n && arr[root] < arr[rightNode]){
        root = rightNode;
    }

    if(root != i){
        swap(arr, i, root);
        heapify(arr, root, n);
    }

}

function heapSort(arr, end) {

    // Build a max-heap by ensuring every subtree satisfies heap property
    for(let i = (end/2)-1; i >= 0; i--){
        heapify(arr, i, end);
    }

    for(let i = end-1; i > 0; i--){
        swap(arr, 0, i); // largest element (index: 0) put in the end
        heapify(arr, 0, i);
    }
}


 /*
    Array representation of Max-Heap

        10
        / \
       5   3
      / \
     2   4

*/
// let arr = [10, 5, 3, 2, 4];

let arr = [34, 23, 34, 33, 22, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
heapSort(arr, arr.length);
console.log(arr);