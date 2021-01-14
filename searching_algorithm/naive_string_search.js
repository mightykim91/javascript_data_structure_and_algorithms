//Udemy lecture - 64.naive string search
//It is very naive string search that has time complexity of O(n^2)

let longString = 'abcdefgh';
let shortString = 'deg';

function naiveStringSearch(long, short) {
    for(let i=0; i < long.length; i++) {
        let count = 0;
        for(let j=0; j < short.length; j++) {
            if(long[i+j] !== short[j]) {
                break;
            }
            else if(long[i+j] === short[j]) {
                count++;
            }
        }
        //console.log(count);
        if(count === short.length) {
            return true;
        }
    }  
    return false;
}

let answer = naiveStringSearch(longString, shortString);
console.log(answer);