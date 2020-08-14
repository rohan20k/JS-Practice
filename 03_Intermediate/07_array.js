var countries = ["India","Russia","USA","Japan","Russia"];
var states = new Array("Madhya Pradesh","Delhi","Gujarat")
// console.log(states[0]);
// console.log(states.length);
states[0] = "Punjab";
// console.log(states[0]);
var user = ["Rohan","rohan2020@gmale.com",3,34,true];
user.pop()
// console.log(user); // True gets removed. 
user.unshift("New Value");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("3"));

// To convert a string and store each element of string in a list we use - 

console.log(Array.from("Rohan"));


