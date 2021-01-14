//Udemy - Javascript Algorithms and Data Structures Masterclass.
//Selection Sort
//"Selection Sort" is similar to bubble sort. 
//However, it places small values into sorted position.
//It uses two pointers, which has fixed position and one to find
//minimum value in array.

let arr = [5, 4, 3, 2, 1];

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(arr[min] !== arr[i]) {
            //console.log(min, arr[i], arr[min])
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            //console.log(min, arr[i], arr[min])
        }
    }
    return arr;
}

console.log(selectionSort(arr));

/*
[Time Complexity]
Time complexity of selection sort is:
worst case/average/best case = O(n^2)
*/

//ES2015 style
function selectionSort2015(arr) {
    const swap = (arr, idx1, idx2) => 
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        //I need to learn about the arrow function.
        if(arr[min] !== arr[i]) swap(arr, i, min);
    }

    return arr;
}

console.log(selectionSort2015(arr));