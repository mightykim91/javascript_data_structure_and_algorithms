//iterative
function iterativeFactorial(num) {
    let total = 1;
    for(let i=num; i > 0; i--) {
        total *= i;
    }
    return total;
}

console.log(iterativeFactorial(5));

function recursiveFactorial(num) {
    //base case
    if(num === 1){
        return num;
    } 
    
    //recursive call
    return num * recursiveFactorial(num-1);
}

console.log(recursiveFactorial(5));