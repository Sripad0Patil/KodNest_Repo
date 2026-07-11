import Home from "./Home"
import About from "./About"
import Contact from "./Contact";
import HomeClass from "./ClassComponents/HomeClass";
import AboutClass from "./ClassComponents/AboutClass";
import ContactClass from "./ClassComponents/ContactClass";
import Greeting from "./Greeting";
import { useEffect, useState } from "react";


function App() {
  let name = "Appu";
  const[count, setCount] = useState(0);
  const[timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return(
    <div>
      <h1>
        Welcome to React
      </h1>
      <Home />
      <HomeClass />
      <About />
      <AboutClass />
      <Contact />
      <ContactClass />
      <Greeting n={name}/>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h2>Timer: {timer}</h2>

    </div>
  )
}

export default App;