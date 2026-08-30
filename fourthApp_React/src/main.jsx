import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Destruct from './Destructrue.jsx'
import Greeting from './Greeting.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Destruct />
    <Greeting name="John" age={15} />
  </>
 
);
