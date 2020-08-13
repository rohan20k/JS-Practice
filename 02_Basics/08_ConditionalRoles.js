// Giving Priviledges to certain roles. 

// To create an application with the following roles:
// admin - gets full access
// subadmion - gets access to create/delete courses
// testprep - gets acceess to create/ delete tests
// user - gets access to consume content 

// Better way to check multiple conditions and provide priviledges and in this case switch and case is a great way. 

var user = "abs";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume the content");
        break;
    default:
        console.log("trial user");
        break;
}