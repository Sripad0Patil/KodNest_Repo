// call

function setUserName(username) {
    this.username = username; // this username will be passed downed to createUser's this after being removed from the call stack!
}

function createUser(username, email, password) {
    setUserName.call(this, username) // using call to hold the username reference in createUser's this!

    this.email = email
    this.password = password
}

const user = new createUser("appu", "appu@yahoo.com", "1090");
console.log(user);
