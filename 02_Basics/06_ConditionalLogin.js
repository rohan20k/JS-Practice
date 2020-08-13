// Allow user to access course if they are:
// Any one of the follwoing should be just true. 
// Logging in from Email
// Logging in from Google
// Logging in from Facebook

var email = false;
var facebook = false;
var google = false;

if (email || facebook || google){
    console.log("You are successfully allowed to login")
} else {
    console.log("Access Denied")
}

