function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access` // Using back tick
            // Once we have written break it will become less bright, so now there is no role of break now. 
            break;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses` // Using back tick
            break;
        case "testprep":
            return `${name} is test prep with access to create tests` // Using back tick
            break;
        case "user":
            return `${name} is user with access to consume content` // Using back tick
            break;
        
        default:
            return `${name} is a trial user.`
            break;
    }
}

console.log(getUserRole("Rohan","user"));

// var getRole = getUserRole('Sammy',"user");

// console.log(getRole)

// Instead of calling a function name we can create a variable and declare the function. 

var getUserRole = function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access` // Using back tick
            // Once we have written break it will become less bright, so now there is no role of break now. 
            break;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses` // Using back tick
            break;
        case "testprep":
            return `${name} is test prep with access to create tests` // Using back tick
            break;
        case "user":
            return `${name} is user with access to consume content` // Using back tick
            break;
        
        default:
            return `${name} is a trial user.`
            break;
    }
}

console.log(getUserRole)