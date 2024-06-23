// import { useState ,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState,createContext } from 'react';
import PublicRoutes from './router/PublicRoutes.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
export const Context = createContext();
function App() {
  const [cartlength,setcartlength]=useState();
//   const[UserLocation,setUserLocation]=useState([]);
// useEffect(()=>{
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             const { latitude, longitude } = position.coords;
//             setUserLocation([latitude, longitude ]);
//         },
//         (error) => {
//             console.error('Error getting user location:', error);
//             // alert("error");
//             // alert("please do enable your location");
          
//         }
//     );
// } else {
//     console.error('Geolocation is not supported by this browser.');
//     alert("geological is not supported in your browser");
// }


// },[navigator.geolocation])
// console.log("this is userLocation fdfg",UserLocation);
  
  // console.log("this is cartlength",cartlength);
  return (
    <>
    <div>
      <Context.Provider value={{cartlength,setcartlength}}>
    <PublicRoutes />
    </Context.Provider>
    {/* <p>Hello world</p> */}
    </div>
    
     
    </>
  )
}

export default App
