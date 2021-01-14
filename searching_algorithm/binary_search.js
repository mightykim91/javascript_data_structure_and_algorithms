//Udemy Lecture - Binary Search

//Binary Search is much faster than linear search
//Rather than eliminating one element at a time,
//using binary search eliminates half of the remaining
//elements at a time
//** Binary search only works on sorted arrays.

let sampleArray = [124,121,33,23,11,2333,42,12,2];
sampleArray = sampleArray.sort((a,b) => {
    return a-b;
});

/*
[Pseudocode]
1. The function accepts sorted array and value.
2. Create a left pointer at the start of the array, and a 
right pointer at the end of the array.
3. While the left pointer comes before the right pointer:
    3.1 Create a pointer in the middle
    3.2 If value is found, return the index.
    3.3 If the value is too small, move the left pointer up.
    3.4 If the value is too large, move the right pointer down.
4. If value has never found, return -1.
*/

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2)
    while(left <= right) {
        //console.log(mid, left, right);
        if(arr[mid] === value) {
            return value;
        }
        else if(value > arr[mid]) {
            left = mid + 1;
        }
        else if(value < arr[mid]) {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2)
        //console.log(mid, left, right);
        //console.log(arr);
    }
    return -1;
}

console.log(binarySearch(sampleArray, 124));

// <Binary Search Time Complexity>
/*
1. Worst and Average = O(log n)
2. Best Case = O(n)
*/