import React, { useState ,useEffect} from 'react'
import Slider1 from './assets/Slider1.jpg'
import './css/Loginpage.css';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Xittoblueimage from './assets/xittoblueimage.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import {loginapi} from '../api/ApI.jsx';
const Login = () => {
    const[phone,setphone]=useState('');
    const[passwordfield,setpasswordfield]=useState('');
    const [message,setmessage]=useState('');
    const navigate=useNavigate();
    const createaccount=()=>{
        navigate('/register');
    }
    const PhoneNumber=(e)=>{
        const phone=e.target.value;
        console.log(phone);
        setphone(phone);
    }
    const password=(e)=>{
        const password=e.target.value;
        console.log(password);
        setpasswordfield(password);
    }
    let [isVisible, setIsVisible] = useState(true);
    let[wrongpassword,setwrongpassword]=useState(false);
    let [login,setlogin]=useState(true);
    const submit=async(e)=>{
        e.preventDefault();
        try {
            const datavalue={
              phone:phone,
              password:passwordfield,
            }
            const response = await fetch(loginapi(), {
              method: 'POST',
              body: JSON.stringify(datavalue),
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            if (!response.ok) {
                setwrongpassword(true);

            //   alert("login unsuccesfull.please try again");
            const timer = setTimeout(() => {
                setIsVisible(false);
                // navigate('/');
                // window.location.reload();
              }, 3000);
              
        setIsVisible(true);
            wrongpassword(false);
              return () => {
            //     isVisible=true;
            //   wrongpassword=false;
                clearTimeout(timer);
                
               
              };
              throw new Error('Network response was not ok.');

              
            }
        
            const data = await response.json();
            setmessage(data.message);
            console.log('Response data:', data);
            localStorage.setItem('accessToken',data.data.accessToken);
            localStorage.setItem('id',data.data.id);
            localStorage.setItem('name',data.data.name);
            localStorage.setItem('phone',data.data.phone);
            localStorage.setItem('profile_url',data.data.profile_url);
            
            if(response.ok)
            {
            //   alert(data.message);
            //   useEffect(() => {
                const timer = setTimeout(() => {
                  setlogin(false);
                  // navigate('/');
                }, 3000);
                
                return () => {
                  clearTimeout(timer);
                  
                 
                };

               

            //   }, []);
            }
            
            
        
          } catch (error) {
            console.error('There was an error:', error);
          }
    }
    // useEffect(() => {
      if (login === false) {
        window.location.reload();
        navigate('/');
      }
    // }, [login]);
    // isVisible=true;
    // wrongpassword=false;

    

    
    console.log("this is message",message.length);
    console.log("mess",message);
    
    console.log("this is isvisible",isVisible);
    console.log("wrongpassword",wrongpassword)

  return (
    <div>
        <div className='registerpage'>
        {/* <div className="alert alert-success" role="alert"></div> */}
        {
                    message.length!==0 && login?  <div className="alert alert-success" role="alert">
                        {message}
                  </div>:""
                }
               
        {
                    wrongpassword&&isVisible?
                    <div className="alert alert-danger" role="alert">
 Wrong Password.Try Again
</div>:""
                }
            <div className='reg row'>
                


                 
                
          

            <div className='col-md-6'>
                <img src={Slider1}className='img-fluid register-image'/>

            </div>
            <div className='col-md-6'>
            {/*  */}
            <form onSubmit={submit}>
                <div className='login-page'>
              <div className='row head'>
                <div className='col-md-6 col-sm-6 	col-6'>
                  <img src={Xittoblueimage}className='xittoimage'/>

                </div>
                <div className='col-md-6 col-sm-6 col-6'>
                  {/* <img src={Xittoblueimage}className='xittoimage'/> */}
                  <h6 className='gotologin'onClick={createaccount}><ArrowBackIosIcon/>Create Account</h6>
                </div>
              </div>
              
                <div className='register-xitto'>
            <h5 className="login" id="exampleModalLabel">Login to XITTOO</h5>
            <p>or <span className='createaccount'onClick={createaccount}>Create Account</span></p>
           
            </div>
         
            <div className="input-group mb-3">
               
 <PersonIcon/>
  <input type="text" onChange={PhoneNumber} className="form-control"placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1"/>
</div>



<div className="input-group mb-3">
  <LockOpenIcon/>
  <input type="password"onChange={password} className="form-control"placeholder='password' aria-label="Username" aria-describedby="basic-addon1"/>
</div>




<p>By signing up you agree to the Emerge Terms & Conditons.</p>
<button type="submit" className="btn btn-primary">Submit</button>
<p className='forgot'>FORGOT LOGIN PASSWORD ?</p>

</div>
</form>


            </div>
            </div>

            
          
        </div>

    </div>
  )
}

export default Login