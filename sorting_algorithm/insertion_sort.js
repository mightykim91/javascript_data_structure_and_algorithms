//Insertion Sort implementation in Javascript.

//Pseudocode
//1. Start picking the second element in the array
//2. Now compare the second element with the one before it and sweap if necessary.
//3. Continue to the next element and if it is in the incorrect order, iterate through
//the sorted portion.
//4. Repeat until the array is sorted.

//Implementation
let unsortedArray = [5, 4, 3, 2, 1];

function insertionSort(arr) {
    // #Step 1.
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let lastIdx = 0;
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                arr[j+1] = arr[j];
                lastIdx = j;
        }
        arr[lastIdx] = currentVal;
    }
    return arr;
}

console.log(insertionSort(unsortedArray));

//5,4,3,2,1
//