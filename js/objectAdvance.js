// Knowing in depth of Object and properties

console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const car = {
    name: "Maserati",
    price: 100000000,
    countryOrigin: "Italy"
}

console.log(Object.getOwnPropertyDescriptor(car, 'price'));

Object.defineProperty(car, 'price', {
    writable: false,
    // enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(car, 'price'));

for(let prop in car) {
    console.log(prop);
}

for(let [key, value] of Object.entries(car)) {
    console.log(`${key} : ${value}`);
    
}