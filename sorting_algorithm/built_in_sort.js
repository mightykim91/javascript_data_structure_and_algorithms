//udemy javascript course 
//Built-in javascript sort method

let unorderedArray = [1,4,5,2,11,222,32,31,25];

/*
Array.prototype.sort(comparator)
The comparator(function) accepts a and b as a parameter and determines
their sort order based on the return value.
 - if negative number returned, a should come before b.
 - if positive number returned, b should come before a.
 - if 0 is returned, javascript consider a and b as equal value.
 
 [Example]
 array = [5, 3]
 a is 5 and b is 3.
 5-3 is positive. Therefore, array becomes [3, 5]

 JUST REMEMBER
 return a-b to sort in order, return b-a to sort in reverse order.
*/
let builtInSort = unorderedArray.sort(function(a, b){
    //return a-b; //increasing order
    return b-a;
})

console.log(builtInSort);
