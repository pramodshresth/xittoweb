import React ,{useEffect} from 'react';
import Navbar from './nav/Navbar'
import './css/Registerprofessional.css';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Image from './assets/Image.svg';
import SiteVisitor from './assets/Sitevisitor.svg';
import xittofooterimage from './assets/xittoblueimage.png';
const RegistertoProfessional = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <section>
       
       <div className='back-img-0'> 
      <div className=''>
  <Navbar className="ad"/>
</div>
<section>
<div className='reg-dd'>
    <div className='registertoprofessional'>
      
      <div className='row'>
        <div className='col-md-4 register-form'>
        <h4 className='registerprofessional'>REGISTER HERE FOR PROFESSINAL!</h4>
        <label className='register-d'>Full Name:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
  < PersonIcon className='icon'/>
</div>


<label className='register-d'>Address:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Full Address" aria-label="Username" aria-describedby="basic-addon1"/>
  <RoomIcon className='icon'/>
</div>


<label className='register-d'>Service:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Select Service you Assist" aria-label="Username" aria-describedby="basic-addon1"/>
  <SearchIcon className='icon'/>
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
  <LocalPostOfficeIcon className='icon'/>
</div>


<label className='register-d'>Mobile Number:</label>
        <div class="input-group mb-3">
        
          
  <input type="text" class=" form-xx form-control" placeholder="Your Number" aria-label="Username" aria-describedby="basic-addon1"/>
  <PhoneIphoneIcon className='icon'/>
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
</section>





</div>

<section data-aos="zoom-in" className='padding'>
  <div className='foot'>
  <div className='footter'>
    <div className='row footter-row'>
      <div className='col-md-6'>

      </div>

      <div className='col-md-6 profile-em'>
         <div className='ourprofile'>
        <div className='row'>
         <div className='col-md-4 profile-section'>
          <img src={SiteVisitor} className='ourprofile-image'/>
          <h3 className='ourprofile-img'>VISITORS</h3>
          <h1 className='ourprofile-num'>555</h1>
          </div> 

          <div className='col-md-4 profile-section'>
          <img src={SiteVisitor}className='ourprofile-image'/>
          <h3 className='ourprofile-img'>HAPPY CLIENTS</h3>
          <h1 className='ourprofile-num'>555</h1>
          </div>

          <div className='col-md-4 profile-section'>
          <img src={SiteVisitor}className='ourprofile-image'/>
          <h3 className='ourprofile-img'>SUPPORT</h3>
          <h1 className='ourprofile-num'>12hrs</h1>
          </div>
          </div>
          </div> 
      </div>

    </div>

  
  {/* <img src={FooterImage}className=' footter-image'/> */}
  </div>
 
  </div>
  <div className='copyrightsection'>
    <div className='row copyright'>
      <div className='col-md-2'>
        <div className='footter-xitto-copyright'>
        <img src={xittofooterimage}className='footterimg'/>

        </div>
        

      </div>
      <div className='col-md-6 footter-xitto-copyright'>
        <p>Copyright &nbsp; 2022 XITTO. All Rights Reserved</p>
      </div>
      <div className='col-md-4 terms-and-condition'>
        <p>Terms & Condition | Privacy policy</p>

      </div>
    </div>
      
      </div>

</section>
</section>
    </div>
  )
}

export default RegistertoProfessional