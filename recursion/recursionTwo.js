//Base Case: The condition when the recursion ends(most important)
//Martin and the Dragon recursion 
//Two Essentials: base case, Different Input.
//재귀함수!!! ㄷㄷ 

function countDown(num){
    //Base Case
    if(num <= 0){
        console.log(num);
        console.log("All done!");
        return;
    }
    console.log(num);
    //Different Input everytime
    num--;
    countDown(num);
}

countDown(10);

function sumRange(num) {
    if(num === 1){
        return 1;
    }
    return num + sumRange(num-1);
}

console.log(sumRange(5));

//recursive function fitfall(함정)
//1. no base case(종료 조건 실종) --> maximum call stack size exceeded.
//2. forgetting to return or returning the wrong thing.
//3. stack overflow. <-- casued by maximum call stack size exceeded.

