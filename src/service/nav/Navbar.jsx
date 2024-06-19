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
import { Getallnotification ,token} from '../../api/ApI';
import axios from 'axios';
const Navbar = ({Isworker,setIsUser,IsUser}) => {
  console.log("thsi is isUser bla bla bla",IsUser);

  const cartlength=localStorage.getItem('cart');
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
        navigate('/');
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
        window.location.reload();
        }

        console.log("this is  worker",Isworker);
        // const[user,setuser]=useState(false);
        const switchtoworker=()=>{
          navigate('/worker');
          // setIsUser(false);
        }
        const switchtoUser=()=>{
          setIsUser(true);
          navigate('/');

        }
        console.log("this is isUser",IsUser);
        console.log("this is is worker",Isworker);
        const[notification,setnotification]=useState();
        useEffect(()=>{
          const notification=async()=>{
            try {
              const response = await axios.get(Getallnotification(), {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return setnotification(response.data.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
          notification()
        },[])
        console.log("this is notification",notification)


        
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
        <div data-bs-toggle="modal" data-bs-target="#mobilenotificationModal" className='mob-home-notification'>
        <NotificationsIcon className='noti'/>
       </div>






       <div class="modal fade " id="mobilenotificationModal" tabindex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
  <div class="modal-dialog notification-dialog">
    <div class="modal-content notification-content">
      <div class="modal-header">

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h5 class="modal-title" id="exampleModalLabel">Notification</h5>
      </div>
      <div class="modal-body">
      {
          notification===undefined?"":notification.map((item,index)=>(
            <p className='notificationbody'>{item.notification}</p>
          ))
        }
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p>
        <p className='notificationbody'>home</p> 
        

      </div>
      
    </div>
  </div>
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
       {/* {IsUser?} */}
       {!IsUser?<a class="nav-link register" onClick={switchtoUser} aria-current="page">SWITCH TO USER</a>:Isworker?<a class="nav-link register" onClick={switchtoworker} aria-current="page">SWITCH TO WORKER</a>:<a class="nav-link register" aria-current="page"onClick={register}>REGISTER TO PROFESSIONAL</a>}
       <a class="nav-link about" href="#assistance"onClick={contactus}>ABOUT</a>
       
       <a class="nav-link" >
        
        <div className='cart'onClick={cart}>
        <div className='cartlength'>
          
          <span className='length'>{cartlength===null?0:JSON.parse(cartlength).length}</span>
</div>
          <img src={Cart}className='cart-img'/>
        </div>
       </a>
       <a class="nav-link">
       <div data-bs-toggle="modal" data-bs-target="#notificationModal" className='home-notification'>
        <NotificationsIcon className='noti'/>






        <div class="modal fade " id="notificationModal" tabindex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
  <div class="modal-dialog notification-dialog">
    <div class="modal-content notification-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h5 class="modal-title" id="exampleModalLabel">Notifications</h5>
      </div>
      <div class="modal-body">
        {
          notification===undefined?"":notification.map((item,index)=>(
            <p className='notificationbody'>{item.notification}</p>
          ))
        }
      </div>
      
    </div>
  </div>
</div>




       </div>
       
       
       
       


















       </a>
       <a class="navlink line" href="#contact">
      
       </a>
       <a class="nav-link">

       <div onClick={user} className='profile-dd dd'>
        <img src={Xshape}/>
       </div>
       {
        name===null?"":
        <div className='small-size-details'>
        <p>Welcome ,</p>
       <p>{name}</p>
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
            {
              accessToken?"":<div className='row'>
              <div onClick={login} className='col-md-12 small-size-login'>
                <LockOpenIcon className='login-icon'/>
                <p className='reg padding-left'>Login</p>
              </div>
              {/* <hr></hr> */}
            </div>
            }
       
{
  accessToken?<div className='row'>
  <div onClick={logout}  className=' small-size-logout col-md-12'>
    <LogoutIcon className='logout-icon'/>
    <p className='reg padding-left'>Logout</p>
  </div>
  {/* <hr></hr> */}
</div>:""
}
{/* col-md-12 user  */}
{
  id?"":<div className='row'>
  <div onClick={Register} className='small-size-logout col-md-12'>
    <HowToRegIcon className='register-icon'/>
    <p className='reg padding-left'>Register</p>
  </div>
  <hr></hr>
</div>
}
            

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