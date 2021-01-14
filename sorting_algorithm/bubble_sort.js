//Udemy - Javascript Algorithms and Data Structures Masterclass.
//Bubble Sort

//The largest values bubble up to the top!
//Time Complexity = O(n^2)

let arr = [5, 4, 3, 2, 1];

function bubbleSort(array) {
    for(let i = array.length; i > 0; i--) {
        for(let j=0; j < i - 1; j++) {
            console.log(array, j, j+1);
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(arr));

//There are more way to reduce time
//But still the time complexity is O(n^2)

function littleFastBubbleSort(arr) {
    var isSwap;
    for(let i = arr.length; i > 0; i--) {
        isSwap = false;
        for(let j = 0; j < i - 1; j++) {
            //console.log(arr, j, j+1)
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = true;
            }
        }
        if(!isSwap) {
            return arr;
        }
    }
}

//to test faster bubble sort, I tested with sorted array
let sortedArray = [1, 2, 3, 4, 5];
let unsortedArray = [5, 4, 3, 2, 1];

console.log(littleFastBubbleSort(sortedArray));
console.log(littleFastBubbleSort(unsortedArray));

/*
SORTED ARRAY RESULT - bubbleSort
[ 5, 4, 3, 2, 1 ] 0 1
[ 4, 5, 3, 2, 1 ] 1 2
[ 4, 3, 5, 2, 1 ] 2 3
[ 4, 3, 2, 5, 1 ] 3 4
[ 4, 3, 2, 1, 5 ] 0 1
[ 3, 4, 2, 1, 5 ] 1 2
[ 3, 2, 4, 1, 5 ] 2 3
[ 3, 2, 1, 4, 5 ] 0 1
[ 2, 3, 1, 4, 5 ] 1 2
[ 2, 1, 3, 4, 5 ] 0 1
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]

SORTED ARRAY RESULT - littleFasteBubbleSort
[ 1, 2, 3, 4, 5 ] 0 1
[ 1, 2, 3, 4, 5 ] 1 2
[ 1, 2, 3, 4, 5 ] 2 3
[ 1, 2, 3, 4, 5 ] 3 4
[ 1, 2, 3, 4, 5 ]

UNSORTED ARRAY RESULT
[ 5, 4, 3, 2, 1 ] 0 1
[ 4, 5, 3, 2, 1 ] 1 2
[ 4, 3, 5, 2, 1 ] 2 3
[ 4, 3, 2, 5, 1 ] 3 4
[ 4, 3, 2, 1, 5 ] 0 1
[ 3, 4, 2, 1, 5 ] 1 2
[ 3, 2, 4, 1, 5 ] 2 3
[ 3, 2, 1, 4, 5 ] 0 1
[ 2, 3, 1, 4, 5 ] 1 2
[ 2, 1, 3, 4, 5 ] 0 1
[ 1, 2, 3, 4, 5 ]

--NOTE--
As we can see above, littleFastBubbleSort has less iteration
compare to bubbleSort. But still, time complexity is O(n^2)
*/