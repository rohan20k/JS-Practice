// falsy values:
// null
// 0 
// '' - Empty strings
// NaN

// Truthy Values are anything apart from this. 

var user = "2" ;

if (user) {
    console.log("Condition is true");
}

console.log(2+2);

if (2 == user) {

    console.log("Condition is true"); // 2 is assumed to be a string here. 

}

// But if we want an even stricter check say with the data type as well we use triple equal symbol. 

