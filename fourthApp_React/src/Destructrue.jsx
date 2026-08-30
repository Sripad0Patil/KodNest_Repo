const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  car: {
    brand: 'Ford',
    model: 'Mustang',
  }
};

// Destructuring
let {firstName, car: { brand, model }} = person;

let message = `My name is ${firstName}, and I drive a ${brand} ${model}.`;

function Destruct() {
    return (
        <>
        <h2>Destructuring an Object</h2>
        <p>{message}</p>
        </>
    )
}

export default Destruct;