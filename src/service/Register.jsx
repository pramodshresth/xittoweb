import React from 'react'
import Slider1 from './assets/Slider1.jpg'
import './css/Register.css';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Xittoblueimage from './assets/xittoblueimage.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate=useNavigate();
  const login=()=>{
    navigate("/login");
  }
  return (
    <div>
        
        <div className='registerpage'>
          <div className='reg row'>
            <div className='col-md-6'>
                {/* <img src={Slider1}className='register-image'/> */}
                {/* <img src={Slider1}className='register-image'/> */}
                <img src={Slider1} class="img-fluid register-image" alt="..."/>

            </div>
            <div className='col-md-6'>
              <div className='row head'>
                <div className='col-md-6 col-sm-6 col-6'>
                  <img src={Xittoblueimage}className='xittoimage'/>

                </div>
                <div className='col-md-6 col-sm-6 col-6'>
                
                  <h6 className='gotologin'onClick={login}><ArrowBackIosIcon/>Go to Login</h6>
                </div>
              </div>
                <div className='register-xitto'>
            <h5 class="modal-title " id="exampleModalLabel">Please Register to XITTOO</h5>
           
            </div>
         
            <div class="input-group mb-3">
               
  <span class="input-group-text" id="basic-addon1"><PersonIcon/></span>
  <input type="text" class="form-control"placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><PhoneIphoneIcon/></span>
  <input type="text" class="form-control"placeholder='phone' aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><LockOpenIcon/></span>
  <input type="password" class="form-control"placeholder='password' aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className='radio-btn'>
<div>
    
  Male<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="Male" aria-label="..."/>
</div>
<div>
  Female<input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="Female" aria-label="..."/>
</div>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><HomeIcon/></span>
  <input type="text" class="form-control"placeholder='District' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><LocationCityIcon/></span>
  <input type="text" class="form-control"placeholder='Address' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<p>By signing up you agree to the Emerge Terms & Conditons.</p>
<button type="button" class="btn btn-primary">Submit</button>



            </div>
            </div>

            
          
        </div>
        </div>    

  )
}

export default Register