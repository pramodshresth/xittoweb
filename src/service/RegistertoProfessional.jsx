import React from 'react'
import Navbar from './nav/Navbar'
import './css/Registerprofessional.css';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Image from './assets/Image.svg';
const RegistertoProfessional = () => {

  return (
    <div>
        <section>
       
       <div className='back-img-0'> 
      <div className=''>
  <Navbar className="ad"/>
</div>

<div className='reg-dd'>
    <div className='registertoprofessional'>
      
      <div className='row'>
        <div className='col-md-4 register-form'>
        <h4 className='registerprofessional'>REGISTER HERE FOR PROFESSINAL!</h4>
        <label className='register-d'>Full Name:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
  < PersonIcon/>
</div>


<label className='register-d'>Address:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Full Address" aria-label="Username" aria-describedby="basic-addon1"/>
  <RoomIcon/>
</div>


<label className='register-d'>Service:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Select Service you Assist" aria-label="Username" aria-describedby="basic-addon1"/>
  <SearchIcon/>
</div>


<label className='register-d'>Year of Experience in sector:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class="form-xx form-control" placeholder="4" aria-label="Username" aria-describedby="basic-addon1"/>
  {/* <SearchIcon/> */}
  <span className='yrs'>yrs</span>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="hello world" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    I agree to all Terms & Conditions
  </label>
</div>



        </div>


        <div className='col-md-4 reg-443 register-form'>
        <label className='register-d'>Mail:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Provide Mail Address" aria-label="Username" aria-describedby="basic-addon1"/>
  <LocalPostOfficeIcon/>
</div>


<label className='register-d'>Mobile Number:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Your Number" aria-label="Username" aria-describedby="basic-addon1"/>
  <PhoneIphoneIcon/>
</div>

<label className='register-d'>Level of Assistance:</label>
<select class="form-select" aria-label="Default select example">
  <option selected>Select Assist Level</option>
  <option className="op"value="1">Beginner</option>
  <option  className="op"value="2">Moderate</option>
  <option  className="op"value="3">Pro</option>
</select>

<button type="button" class="btn btn-light">Light</button>

        </div>


        <div className='col-md-4 reg-443'>
          <img src={Image} className='image'/>
        </div>
      </div>

    </div>

</div>
</div>
</section>
    </div>
  )
}

export default RegistertoProfessional