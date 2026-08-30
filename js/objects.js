//singleton object -> const user = new Object()
// constructor method -> Object.create



const mySym = Symbol("Key1");
// declaring an object
//object literals
const user = {
    "full name": "raja raju", // only accessible using [] 
    
    name: "raja", // accessible using . & []
    
    age: 20,
    
    location: "Jaipur",
    
    email: "raja@sampoo.com",
    
    isLoggedIn: false, // boolean
    
    lastLoginDays: ["Monday", "saturday"], // array
    
    [mySym]: "NewKey1", // symbol
    
    greeting: function() {  // function
        console.log("Hello world!");
        
    }
}

// accessing object elements

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.isLoggedIn = true; // update the object elements
console.log(user.isLoggedIn);

user.state = "Rajasthan"; // adding new object elements
console.log(user.state);


console.log(user.greeting());

user.greeting2 = function() {
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting2());

// using freeze
Object.freeze(user); // object elements value can't be changed
user.state = "Kerala"; // no changes
console.log(user); 


// nested objects

const newUser = {
    id: 12,
    fullName: { // object
        firstName: "Ram",
        lastName: "kumar"
    }
}

console.log(newUser.fullName.firstName);
console.log(newUser);

// combine two or more objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "c"}

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);

console.log(obj3 == obj4);
console.log(obj3 === obj4);

//object keys
console.log(Object.keys(user));
//object values
console.log(Object.values(user));
//object entries
console.log(Object.entries(user));

// checking object properties/elements
console.log(user.hasOwnProperty('name'));
