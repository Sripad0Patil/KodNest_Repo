//Parent class
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
        
    }
}
//Child class
// extends keyword
class Teacher extends User {
    constructor(username, email, password){
        super(username); // super keyword
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}
 
const teacher = new Teacher("Kamala", "Kamala@gmail.com", "9090");
console.log(teacher);
teacher.addCourse();

const user  = new User("Kamala");
console.log(user);
user.logMe();

// using method called instanceof()

console.log(user instanceof User);
console.log(user instanceof Teacher); // false
console.log(teacher instanceof User);
console.log(teacher instanceof Teacher);


