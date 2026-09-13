import React, { useState } from "react";
import "./App.css";

function App() {
  // Explanation of useState

// password -> state variable
// "" -> initial value of password
// setPassword -> function used to update password
// event.target.value -> new value entered by the user

// setPassword(event.target.value)
// updates the password state

// In reality:
// password: "" -> "hello"
// state changes from its initial value to the new value

// useState gives you a state value + a function to update that value. 

// password is state value and setPassword is state updater function

// use onChange function to call the state updater function

  const [password, setPassword] = useState('');  

   const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      
      <form className="box">
        <h2>Login Page</h2>

        <div className="username-row">
           <label htmlFor="username">User Name: </label>
          <input type="text" name="username" id="username" placeholder="Name"/>
        </div>

        <div className="password-row">
          <label htmlFor="password">Password: </label>
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" id="password" value={password} 
          onChange={handlePasswordChange}/>

          <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
          </button>
        </div> 

        

        
        <p>Character Count: {password.length} </p>

      </form>
      
    </div>
  )
 
}

export default App;