//Udemy Linear search
/*
Javascript already has built-in linear search method
in an given array such as 'indexOf', 'includes', 'find', 'findIndex'.
*/

lastnames = ["kim","lim","park","choi"];

console.log(lastnames.indexOf("kim"));
console.log(lastnames.includes("kim"));
console.log(lastnames.find(element => element.includes('k')));
console.log(lastnames.findIndex(element => element === "kim"));

//indexOf returns index of given parameter to search
//includes returns true or false
//find takes function that describes condition to search 
//and returns first value that satisfies the condition
//findIndex returns index of element that
//satisfies condition described in function 

//write source code based on following source code.
/*
[Pseudocode]
1. The function accepts an array and a value.
2. Look through the array and check if the current array element 
is equal to the value.
3. If it is, return the index at which the element is found.
4. If the value is never found, return -1.
*/

function linearSearch(arr, value) {
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === value) {
            return arr.indexOf(arr[i]);
        }
    }
    return -1;
}

function Solution() {
    let array = [1,2,3,4,5,12,3,23,4];
    answer = linearSearch(array, 12);
    console.log(answer);
}

Solution();

//Linear Search Time Complexity
/*
1. Best Case = O(1) [When value is at first place]
2. Worst Case = O(n) [When value is at the end or doesn't exist]
3. Average Case = O(n)
*/