import React, { useState } from 'react'
import NavLogo from '../assets/navlogo.png';

import Cart from '../assets/Cart.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Xshape from '../assets/Xshape.svg';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const[show,setshow]=useState(false);
    const register=()=>{
        navigate('/registertoprofessional');
      }
      const contactus=()=>{
        navigate("/contactus");
      }
      const user=()=>{
        setshow(!show);
      }
      console.log("this is show",show);
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <img src={NavLogo} className='logo'/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
       <a class="nav-link register" aria-current="page"onClick={register}>REGISTER TO PROFESSIONAL</a>
       <a class="nav-link about" href="#assistance"onClick={contactus}>ABOUT</a>
       <a class="nav-link" href="#contact">
        <div className='cart'>
          <img src={Cart}/>
        </div>
       </a>
       <a class="nav-link" href="#contact">
       <div className='home-notification'>
        <NotificationsIcon className='noti'/>
       </div>

       </a>
       <a class="navlink line" href="#contact">
      
       </a>
       <a class="nav-link" href="#contact">
       <div onClick={user} className='home-notification dd'>
        <img src={Xshape}/>
       </div>
       {
        show ? <div>
          <div className='page'>

          </div>
          </div>:""
       }
       </a>
       <a class="nav-link user-3" href="#contact">
        <p className='user-3d'>Hello,Sign in</p>
        <p className='user-3d'>My Account</p>
       
       </a>
      
       

       
     </div>
     
     
   
    
     
     
   </div>

</nav>
    </div>
  )
}

export default Navbar