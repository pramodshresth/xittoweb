import React, { useEffect, useState,useContext } from 'react'
import NavLogo from '../assets/navlogo.png';

import Cart from '../assets/Cart.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Xshape from '../assets/Xshape.svg';
import { useNavigate, useLocation } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import {Context} from '../App';
import { Context } from '../../App';
// const CartContext = createContext();
// const serviceprobem = () => {
//   // const usercart= useContext(CartContext);

//   const {setcartlength}=useContext(Context);
const Navbar = () => {
  // const {cartlength}=useContext(Context);
  const cartlength=localStorage.getItem('cart');
  console.log("this is cartlength",cartlength);
  // console.log("this is carlength",cartlength);
  const navigate = useNavigate();
  const[show,setshow]=useState(false);
  // const[cartlength,setcartlength]=useState();

  // const {}=useContext(Context);
    const register=()=>{
        navigate('/registertoprofessional');
      }
      const contactus=()=>{
        navigate("/contactus");
      }
      const user=()=>{
        setshow(!show);
      }
      const login=()=>{
        navigate('/login');
      }
      const joinus=()=>{
        navigate('/registertoprofessional');
      }
      const Register=()=>{
        navigate('/register');
      }
      const cart=()=>{
        navigate('/cart');
      }
      const home=()=>{
        navigate('/');
      }
      console.log("this is show",show);
      let name = localStorage.getItem('name');
      let accessToken=localStorage.getItem('accessToken');
      let id=localStorage.getItem('id');
      // const[show,setshow]=useState(false);
      const[showmessage,setshowmessage]=useState(null);

      const logout=()=>{
       
        const timer = setTimeout(() => {
          setshowmessage(false);
          // navigate('/');
        }, 3000);
        setshowmessage(true)
        
        return () => {
          clearTimeout(timer);
          
         
        };
       
      }
      if(showmessage===false)
        {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('profile_url');
        localStorage.removeItem('phone');
        localStorage.removeItem('cart');
        }
  return (
    <div>
      {/* <div class="alert alert-success" role="alert"></div> */}
     {showmessage?<div class="alert alert-success" role="alert">Logout successfully</div>:""
     } 
         <nav class="navbar navbar-expand-lg bg-body-tertiary">

         
   <img src={NavLogo} className='logo'onClick={home}/>
   <div className='mobileview'>
   <div className='mobile'>
    <div className='mobilecart'onClick={cart}>
    <div className='cartlength'>
    <span className='length'>{cartlength===null?0:JSON.parse(cartlength).length}</span>    
</div>
          <img src={Cart} className='cart-img'/>
          </div>
        </div>

        
       <div className='mobile'>
        <div className='mob-home-notification'>
        <NotificationsIcon className='noti'/>
       </div>
       </div>

       <div className='mobile'>
        
       {/* <div onClick={user} className='mob-notification dd'>
        
        <img src={Xshape}/>
       </div> */}
       </div>
        </div>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
     {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button> */}
   <div className='cross-btn'>
     <button type="button" class="btn-close navbar-toggler "data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"></button>
     </div>
     {/* <div className='nav-bar'></div> */}
       <a class="nav-link register" aria-current="page"onClick={register}>REGISTER TO PROFESSIONAL</a>
       <a class="nav-link about" href="#assistance"onClick={contactus}>ABOUT</a>
       
       <a class="nav-link" >
        
        <div className='cart'onClick={cart}>
        <div className='cartlength'>
          
          <span className='length'>{cartlength===null?0:JSON.parse(cartlength).length}</span>
</div>
          <img src={Cart}className='cart-img'/>
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

       <div onClick={user} className='profile-dd dd'>
        <img src={Xshape}/>
       </div>
       {
        name===null?"":
        <div className='small-size-details'>
        <p>Welcome ,</p>
       <p>{name}</p>
       {/* <p>9823576196</p> */}

       </div>
       }
      
       
       {
        show ? <div>
          <div className='page'>
            <div className='row'>
              <div className='col-md-2 col-sm-2 col-2'>
            <AccountCircleIcon className='accountcircleicon'/>
            </div>

            <div className='col-md-10 col-sm-10 col-10 '>
            <div className='profile'>
              <p>Pawan Subedi</p>
              <p>9823576196</p>
              </div>
            </div>
            {/* <hr></hr> */}
            
            </div>

{
  id?"":<div className='row'>
  <div onClick={Register} className='col-md-12 user'>
    <HowToRegIcon className='register-icon'/>
    <p className='reg padding-left'>Register</p>
  </div>
  <hr></hr>
</div>
}
            
            {
              accessToken?"":<div className='row'>
              <div onClick={login} className='col-md-12 user'>
                <LockOpenIcon className='login-icon'/>
                <p className='reg padding-left'>Login</p>
              </div>
              <hr></hr>
            </div>
            }
            {
              accessToken?
              <div className='row'>
              <div onClick={logout} className='col-md-12 user'>
                <LogoutIcon className='logout-icon'/>
                <p className='reg padding-left'>Logout</p>
              </div>
              <hr></hr>
            </div>:""
            }
          </div>
          </div>:""
       }
       </a>
       <div className='row'>
              <div onClick={contactus} className='col-md-12 small-size-login'>
                <LibraryBooksIcon className='login-icon'/>
                <p className='reg padding-left'>ABOUT </p>
              </div>
              {/* <hr></hr> */}
            </div>
       <div className='row'>
              <div onClick={login} className='col-md-12 small-size-login'>
                <LockOpenIcon className='login-icon'/>
                <p className='reg padding-left'>Login</p>
              </div>
              {/* <hr></hr> */}
            </div>

            <div className='row'>
              <div className=' small-size-logout col-md-12'>
                <LogoutIcon className='logout-icon'/>
                <p className='reg padding-left'>Logout</p>
              </div>
              {/* <hr></hr> */}
            </div>

            <div className='row'>
              <div className='col-md-12 desc-dd'>
                {/* <LogoutIcon className='logout-icon'/> */}
                <p className='reg '>Become a Emerge Member for the best products,inspiration and stories in emerge.</p>
                <button onClick={joinus} className='joinus'>Join Us</button>
              </div>
              {/* <hr></hr> */}
            </div>
            {
              name===null?
              <a class="nav-link user-3" href="#contact">
        <p className='user-3d'>Hello,Sign in</p>
        <p className='user-3d'>My Account</p>
       
       </a>:<a class="nav-link user-3" href="#contact">
        <p className='user-3d'>welcome</p>
        <p className='user-3d'>{name}</p>
       
       </a>

            }

            
       
      
       

       
     </div>
     
     
   
    
     
     
   </div>

</nav>

{/* {
  showmessage?<div class="alert alert-success" role="alert">:""
} */}
    </div>
  )
}

export default Navbar