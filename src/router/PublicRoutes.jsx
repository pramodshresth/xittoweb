import { BrowserRouter,Routes,Route } from "react-router-dom";
import React ,{useState,useEffect} from 'react'
import Serviceprobem from "../service/Serviceproblem";
import Service from '../service/Service';
import Register from "../service/Register.jsx";
import ContactUs from '../service/ContactUs.jsx';
import Login from "../service/Login.jsx";
import RegistertoProfessional from "../service/RegistertoProfessional.jsx";
import Cart from "../service/cart/Cart.jsx";
import { fetchworker,token } from "../api/ApI.jsx";
import axios from "axios";
// import Showserviceproblem  from "../service/Showserviceproblem";
import Worker from "../service/worker/Worker.jsx";
// import WorkerView from '../service/worker/WorkerView.jsx';
import WorkerView from "../service/worker/WorkerView.jsx";
const PublicRoutes = () => {
  const[Isworker,setIsworker]=useState(false);
  const[IsUser,setIsUser]=useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchworker(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("this is response from public route",response.data.data);
        // console.log("this is response",response.data.data.assistance.map((item,index)=>{return item.approved===true}));
        const approved=response.data.data.assistance.map((item,index)=>item.approved);
        console.log("this is approved",approved);
        const workerapproved=approved.includes(true)?true:false;
        console.log("this is workerapproved",workerapproved);
        setIsworker(workerapproved)

        // return setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("This is Isworker",Isworker);
  console.log("this is setisuser",IsUser)
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route> 
              {/* {
                Is
              }   */}
              {
                IsUser?
                <>
                 <Route path='/'element={<Service IsUser={IsUser} Isworker={Isworker}/>}></Route>
            <Route path='/serviceproblem'element={<Serviceprobem IsUser={IsUser}  Isworker={Isworker}/>}></Route>
            <Route path='/contactus'element={<ContactUs Isworker={Isworker}/>}></Route>
            <Route path='/register'element={<Register />}></Route>
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/registertoprofessional'element={<RegistertoProfessional IsUser={IsUser} Isworker={Isworker}/>}></Route>
            <Route path='/cart'element={<Cart IsUser={IsUser} Isworker={Isworker}/>}></Route> 
            <Route path='/worker'element={<Worker Isworker={Isworker}IsUser={IsUser} setIsUser={setIsUser}/>}></Route>
            <Route path='/workerview'element={<WorkerView Isworker={Isworker}IsUser={IsUser} setIsUser={setIsUser}/>}></Route>
              </>:
            <>
            <Route path='/worker'element={<Worker Isworker={Isworker}IsUser={IsUser} setIsUser={setIsUser}/>}></Route>
            <Route path='/workerview'element={<WorkerView Isworker={Isworker}IsUser={IsUser} setIsUser={setIsUser}/>}></Route>
            
            </>

             
              }
           
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default PublicRoutes