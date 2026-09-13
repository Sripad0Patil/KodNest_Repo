// class with constructor

// class is keyword in JS
class User {
    // constructor: Every class usually includes a special method known as Constructor!
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // method: function which are declared within a class is known as method
    loggedIn(){
        console.log(`${this.username} logged in successfully!`);
    }
}
// new: creating a new instance of class using new keyword
//Object: It is an instance of the class
const newUser = new User("John", "john123@gmail.com", "123qejd");
console.log(newUser.password);
newUser.loggedIn();