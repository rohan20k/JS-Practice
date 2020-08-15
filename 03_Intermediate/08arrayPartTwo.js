// function isEven(element){
//     if (element % 2 === 0){
//         return true;
//     } else{
//         return false;
        
//     }
// }

// function isEven(element){
//     return element % 2 === 0; // This is the better approach to write the code as it is more efficient.
// }
// console.log(isEven(3));

// var isEven = (element) => {
//    return element % 2 === 0; 
// }

// // console.log(isEven(3));

// var result = [2,4,14,6,22,8].every()//Every goes into the array and checks and the run the test for every element of the array. 
// console.log(result);

// We can write a call back 

// var result = [2, 3, 6, 8].every((e) => {
//     return e % 2 === 0;
// });

var result = [2, 4, 6, 8].every((e) => (e% 2 ===0));
console.log(result);



