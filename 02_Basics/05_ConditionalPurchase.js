// User is only allowed to make a purchase when he is:
// logged in 
// email is verified
// card info is valid
// if anyone of the above criterion is missing, stop purchase. 

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false; 

// if (isLoggedIn){
//     console.log("Logged In Successfully");

//     if (isEmailVerified){
//         console.log("Email is Verified");

//         if(cardInfo){
//             console.log("You can make a purcahse");
//         }

//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("You can make a purchase");
} else {
        console.log("You are not allowed to make a purchase");
    }