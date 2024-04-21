import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Serviceprobem from "../service/Serviceproblem";
import Service from '../service/Service';


import ContactUs from '../service/ContactUs.jsx'
// import Showserviceproblem  from "../service/Showserviceproblem";
const PublicRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route>
            <Route path='/'element={<Service/>}></Route>
            <Route path='/serviceproblem'element={<Serviceprobem/>}></Route>
          
            <Route path='/contactus'element={<ContactUs/>}></Route>
            
            {/* <Route path='/showserviceproblem'element={<Showserviceproblem/>}></Route> */}
            </Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PublicRoutes