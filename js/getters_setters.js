class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; // this is constructor password
    }

    set email(value) {
        this._email = value
    }

    get email() {
        return this._email
    }

    set password(value) {
        this._password = value // this is getter and setter _password
    }

    get password() {
        return `===${this._password}===`
    }
}

// email / _email :- to avoid race condition between constructor and setter of setting the email

const user1 = new User("Kly@gmail.com", "afwfwe")
console.log(user1.email);
console.log(user1.password);

