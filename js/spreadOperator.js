// Spread Operator (...) -> copies all or part of an existing array or object into another array or object.

// spread operator on array
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

const [one, two, ...rest] = numbersCombined;


//spread operator on Object
const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}
console.table(mycar);


// Normal string (" ") or (' ')
const name = "John";
const age = 30;
const message = "Hello, " + name + "!\n" + 
"You are " + age + " years old.";
console.log(message);

//template strings (` `)
const message1 = `Hello, ${name}!
You are ${age} years old.`;
console.log(message1);

const html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`;
console.log(html);

const x = `
  John:
    Hello, how are you?
  Jane:
    I'm fine, thanks!
`;
console.log(x);

const items = ["apple", "banana", "orange"];
const list = `You have ${items.length} items:
${items.map(item => `- ${item}`).join('\n')}`;

console.log(list);

const isAdmin = true;
const message2 = `Status: ${isAdmin ? 'Admin' : 'User'}`;

console.log(message2);

//String object

const str = new String('String');
console.log(str);