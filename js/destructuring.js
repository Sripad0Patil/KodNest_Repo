//Destructuring Arrays

const address = ['Banglore', 'Karnataka', 'India'];
const [city, state, country] = address;
console.table([city, state, country]);

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;
console.table([car, suv]);


//Destructuring Date using function

function dateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth() + 1;
  const y = dat.getFullYear();

  return [d, m, y];
}

const [date, month, year] = dateInfo(new Date());
console.log("Date:", date);
console.log("Month:", month);
console.log("Year:", year);


//Destructuring Objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, age} = person;

console.table([firstName, lastName, age]);