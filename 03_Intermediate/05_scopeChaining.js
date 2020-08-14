var name = "Rohan"; // own icecream and this is the bigger guy

console.log("Line Number 3",name)

myName()

function myName(){
    // var name = "Mr R"; // Both of you have got your own icecream // This is the smaller guy
    console.log("Line number 7",name)

    
    function sayNameTwo(){
        console.log("Line number ",name);
    }
}

myName();

