// normal function

function greeting() {
    console.log("Good morning!");
}

// calling a function
greeting();


// function expression

hi = function() {
    console.log("Hi!");
};

hi();


// arrow function

hello = () => {
    console.log("Hello!");
};

hello();


// one-liner arrow function

yo = () => "Yo what's up!";

console.log(yo());


// anonymous function
// A function without a name

// function () {
//     console.log("Anonymous function!");
// }


// IIFE
// Immediately Invoked Function Expression

(function iife() {
    console.log("IIFE");
})();

// Higher Order Function (HOF)
function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) { // takes a function as input and returns function as output
    return operation(a, b);
}

console.log(calculate(10, 12, add)); //here add is a function reference


// call back function

function greet(name) {
    console.log(`Hello, ${name}`);    
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet);


// closure 

function outer() {
    count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();
counter();

// constructor function
function User(email, password) {
    this.email = email
    this.password = password

    this.logIn = function() {
        console.log(`${this.email} logged in Successfully!`);
        
    }
}

const user1 = new User("Olly@cartoonNetwork.com", "pose123");
console.log(user1);
console.log(user1.password);
user1.logIn();
