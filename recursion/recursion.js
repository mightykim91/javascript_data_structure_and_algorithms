//The call stack == stack for functions
//Any when a function is invoked,
//it is placed on the top of the call stack
//When javascript sees the return keyword or when the function ends, 
//the compiler will remove(pop)

function functionA(){
    console.log("A");
    functionD();
    return "A";
}

function functionB(){
    console.log("B");
    return "B";
}

function functionC(){
    console.log("C");
    return "C";
}

function functionD(){
    console.log("D");
    return "D";
}

functionA();
functionB();
functionC();
functionD();

