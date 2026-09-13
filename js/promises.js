// resolve -> then, reject -> catch
const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Function 1 completed");
        resolve()
    }, 5000)
});
promise.then(function() {
    console.log("Promise 1 consumed");
})

// promise one-liner
new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async Function 2 completed");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Promise 2 consumed");
})

// passing arguments through resolve
const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async Function 3 completed");
        resolve({username: "Akash", email: "akash@yahoo.com"});
    }, 3000)
}).then(function(user){
    console.log("Promise 3 consumed");
    console.log(typeof user);
    console.log(user);
})

// using catch to handle reject
const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async Function 4 completed");
        let error = false; // change it true, to check the error!
        if(!error) {
            resolve({username: "Ishan", password: "1234"});
        } else {
            reject("Error: Something went wrong!");
        }
    }, 1000)
})

// promise chaining ->  .then().then().then().....  .catch().finally()
// finally block will be executed always
promise4
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
    
}).finally(() => {
    console.log("Promise is either resolved or rejected!");
})

