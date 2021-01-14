//Udemy lecture - Pure Recursion

/*
function itself is recursive.
The example shows purely recursive function
that collects odd values
*/

function collectOdds(arr) {
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOdds(arr.slice(1)));

    return newArr;
}

function Solution(){
    let answer = collectOdds([1,2,3,4,5]);
    console.log(answer);
}
console.log(2**2);
Solution();