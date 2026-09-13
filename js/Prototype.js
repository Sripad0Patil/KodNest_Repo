
let str = "Sripad    ";

console.log(str.trim().length);

// creating new in-built method called trueLength

//directly implement on the top hierarchy called Object
// Object.prototype.trueLength = function(str) {
//     return this.trim().length;
// }
// console.log(name.trueLength());



// or go for String parent so that only String children's can access
String.prototype.trueLength = function() {
    return `True Length is: ${this.trim().length}`;
}

console.log(str.trueLength());


