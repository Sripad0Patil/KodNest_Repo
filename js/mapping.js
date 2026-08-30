//Mapping on array
const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(i => i*2);
console.log(doubleArr);


//Mapping on objects
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const eachUser = users.map(user => `${user.name} is ${user.age} years old.`);

console.table(eachUser);


//Mapping Parameters

const fruitsList = ['apple', 'banana', 'cherry'];

const eachFruit = fruitsList.map((fruit, index, array) => {
    return `Fruit: ${fruit}, Index: ${index}, Array: ${array}`;
})

console.table(eachFruit);