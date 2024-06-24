import React, { useState } from 'react'
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
  const [name,setname]=useState();
  const[phone,setphone]=useState();
  const[password,setpassword]=useState();
  const[gender,setgender]=useState();
  const[district,setdistrict]=useState();
  const[address,setaddress]=useState();
  const[image,setimage]=useState();
  const[invitecode,setinvitecode]=useState();
  const username=(e)=>{
    const x=e.target.value;
    setname(x);
  }

  const userphoneno=(e)=>{
    const x=e.target.value;
    setphone(x);
  }
  const userpassword=(e)=>{
    const x=e.target.value;
    setpassword(x);
  }
  
  const usergender=(e)=>{
    const x=e.target.value;
    setgender(x);
    console.log("this is gender",x);
  }
  const userdistrict=(e)=>{
    const x=e.target.value;
    setdistrict(x);
    console.log("this is district",x)
  }
  const useraddress=(e)=>{
    const x=e.target.value;
    setaddress(x);

    console.log("this is address")
  }
  const userimage=(e)=>{
    const x=e.target.files[0];
    setimage(x);
    console.log("this is user image",x);
  }

  // const[phone,setphone]=useState();
  // const[password,setpassword]=useState();
  // const[gender,setgender]=useState();
  // const[district,setdistrict]=useState();
  // const[address,setaddress]=useState();
  // const[image,setimage]=useState();
  const userinvitecode=(e)=>{
    const x=e.target.value;
    setinvitecode(x);

  }

  // const Registeronxitto=(e)=>{
    
  //   e.preventDefault();
  //   // const data={
  //   //   name:name,
  //   //   phone:phone,
  //   //   password:password,
  //   //   gender:gender,
  //   //   district:district,
  //   //   address:address,
  //   //   image:image,
  //   //   role:"user",
  //   //   otp:"",
  //   //   invite_code:invitecode,
      

  //   // }
    
    
      
      
  //   )
  // }
  const Registeronxitto=(e)=>{
    

  }


  return (
    <div>
        
        <div className='registerpage'>
          <div className='reg row'>
            <div className='col-md-6'>
                <img src={Slider1} className="img-fluid register-image" alt="..."/>
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
              <form onSubmit={Registeronxitto}>
                <div className='register-xitto'>
            <h5 className="modal-title " id="exampleModalLabel">Please Register to XITTOO</h5>
            </div>
            <div className="input-group mb-3">       
<PersonIcon/>
  <input type="text" onChange={username}className="form-control"placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
<PhoneIphoneIcon/>
  <input type="text "onChange={userphoneno} className="form-control"placeholder='phone' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
<LockOpenIcon/>
  <input type="password"onChange={userpassword} className="form-control"placeholder='password' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className='radio-btn'>
<div>
  Male<input className="form-check-input"onChange={usergender} type="radio" name="gender" id="" value="Male" aria-label="..."/>
</div>
<div>
  Female<input className="form-check-input"onChange={usergender} type="radio" name="gender" id="" value="Female" aria-label="..."/>
</div>
</div>
<div className="input-group mb-3">
<HomeIcon/>
  <input type="text"onChange={userdistrict}className="form-control"placeholder='District' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
 <LocationCityIcon/>
  <input type="text"onChange={useraddress} className="form-control"placeholder='Address' aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
 <LocationCityIcon/>
  <input type="file"onChange={userimage} className="form-control"placeholder='Address' aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
 <LocationCityIcon/>
  <input type="text"onChange={userinvitecode} className="form-control"placeholder='Address' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<p>By signing up you agree to the Emerge Terms & Conditons.</p>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
            </div>
            
        </div>
        </div>    
  )
}

export default Register