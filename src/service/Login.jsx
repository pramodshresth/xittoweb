import React from 'react'
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
const Login = () => {
    const navigate=useNavigate();
    const createaccount=()=>{
        navigate('/register');
    }
  return (
    <div>
        <div className='registerpage'>
            <div className='reg row'>
            <div className='col-md-6'>
                <img src={Slider1}className='img-fluid register-image'/>

            </div>
            <div className='col-md-6'>
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
            <h5 class="login" id="exampleModalLabel">Login to XITTOO</h5>
            <p>or <span className='createaccount'onClick={createaccount}>Create Account</span></p>
           
            </div>
         
            <div class="input-group mb-3">
               
  <span class="input-group-text" id="basic-addon1"><PersonIcon/></span>
  <input type="text" class="form-control"placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>



<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><LockOpenIcon/></span>
  <input type="password" class="form-control"placeholder='password' aria-label="Username" aria-describedby="basic-addon1"/>
</div>




<p>By signing up you agree to the Emerge Terms & Conditons.</p>
<button type="button" class="btn btn-primary">Submit</button>
<p className='forgot'>FORGOT LOGIN PASSWORD ?</p>

</div>


            </div>
            </div>

            
          
        </div>

    </div>
  )
}

export default Login