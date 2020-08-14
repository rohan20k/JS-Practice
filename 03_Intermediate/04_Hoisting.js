// Creating method that calculates the tip. 



tipper("5") // Because of the global context feature the 

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5);
}

// tipper("5")
// Interestingly the Global context has no idea till now and the variables are just undefined that we are 
// trying to use as of now. 

var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15)
}

bigTipper("200")

var name = "Rohan";

console.log(name)

// Code hoisting says what if we try to use the name first, then define the global context. 

// console.log(name_2);

// name_2 = "Michael"; In this case the variable will be undefined. 

function sayName(){
    var name = "Mr R";
    console.log(name);
}

sayName(); // A new context loaded above the execution context and for it the name value is Mr. R

console.log(name); // A new context is loaded at the top of local context.


