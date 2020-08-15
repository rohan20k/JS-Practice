var user = {
    firstName : "Rohan",
    lastname : "Khurana",
    role : "Admin",
    loginCount : 32, 
    facebookSignedIn : true,
    courseList : [] ,// no access to any courses as of now. 
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },

    getCourseCount : function () { 
        if (this.courseList.length < 2)
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
        else {
            return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
        }
    },

    getinfo : function () {
        return `The user ${this.firstName} ${this.lastname} is enrolled in ${this.courseList.length} courses`
        
    }
};

var courseList = true;

console.log(user.firstName);

// console.log(user.getCourseCount());

user.buyCourse("How to be a pro coder Course");

// console.log(user.getCourseCount());

user.buyCourse("How to be a Good Human");

// console.log(user.getCourseCount()); // if we refer we don't need to use the parenthesis but since we are 

console.table(user.getinfo());

function getinfo () {
    console.log(user)
}

console.log(getinfo());