function sayHello(name){
    // Here we write a whole lot of code. 
    console.log("Hello there, Rohan");
    console.log("Hello there, ", name); 
    console.log(`Hello there, How are you ${name} ?`)
}

// sayHello(); Calling a function 

// sayHello; Executing a function 

// sayHello("Sammy");

function namaste() {
    return "Hello in India";
}

namaste(); // plainly running it nothing happens 

// So in essence in the above function, it just returns the value but what to do with that value,
// we haven't specified. 

// var greetings = namaste(); // storing the value that is being printed 

// console.log(greetings);

console.log(namaste()); // Avoiding the use of an additional variable. 

