const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const fruitsList = ['apple', 'banana', 'cherry'];

function App() {
  return (
    <>
    <h2>Using Mapping in React</h2>
    <ul>
      {users.map(user => <li key={user.id}>{user.name} is {user.age} years old.</li>)}
    </ul>
    <br />
    <ul>
      {fruitsList.map((fruit, index, array) => {
        return (
          <li key={index}>
            Name: {fruit}, Index: {index}, Array: {array}
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App;