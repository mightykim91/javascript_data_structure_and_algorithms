//helper method recursion

//There is two functions.
//Outer function & Inner function

//Example
//In this example, helper method was used
//to protect value that needs to be constant during execution.
function collectOddValues(arr) {

    let result = [];

    //helper function
    function helper(helperInput) {
        //base case
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        //recursive call
        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1,21,3,4,6,2,3,41,42]));
