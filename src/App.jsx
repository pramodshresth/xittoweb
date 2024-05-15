// import { useState ,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState,createContext } from 'react';
import PublicRoutes from './router/PublicRoutes.jsx';
export const Context = createContext();
function App() {
  const [cartlength,setcartlength]=useState();
  console.log("this is cartlength",cartlength);
  return (
    <>
    <div>
      <Context.Provider value={{cartlength,setcartlength}}>
    <PublicRoutes/>
    </Context.Provider>
    {/* <p>Hello world</p> */}
    </div>
    
     
    </>
  )
}

export default App
