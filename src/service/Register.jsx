import React, { useState,useEffect } from 'react'
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
import { Sendotp ,UserRegister} from '../api/ApI';
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
  const[userotp,setuserotp]=useState();
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

  const userinvitecode=(e)=>{
    const x=e.target.value;
    setinvitecode(x);

  }
  const[message,setmessage]=useState();
  const[success,setsuccess]=useState(false)
  const[error,seterror]=useState(false)
  const Registeronxitto=async(e)=>{

    e.preventDefault();
    const data={
      name:name,
      phone:phone,
      password:password,
      gender:gender,
      district:district,
      address:address,
      image:image,
      role:"user",
      otp:userotp,
      invite_code:invitecode,
    }
    console.log("this is phone",phone);
    try{
      const response = await fetch(UserRegister(), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if(response.ok)
        {
          const data = await response.json();
          console.log("this is data",data);
          setmessage(data.message);

          
          setsuccess(true)
          
        }
      else{
        const data = await response.json();
        console.log("error",data);
        setmessage(data.message);
        const timer = setTimeout(() => {
          seterror(true);
          // navigate('/');
        }, 3000);
        
        return () => {
          seterror(false)
          clearTimeout(timer);
        };
      }
    }catch(error)
    {
      console.log("There was an error");
    }
  }
  
  const [showotp,setshowotp]=useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setsuccess(false);
      // navigate('/');
    }, 3000);
    return () => {
      
      clearTimeout(timer);
    };

    
    
  },[success])
  console.log("this is success",success)
  const submit_phone_number=async()=>{
    const data={
      phone_num:phone
    }
    const response = await fetch(Sendotp(), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.ok)
      {
        const data = await response.json();
        console.log("this is data",data);
        const x=data.data.otp;
        console.log("this is otp",x);
        setuserotp(x);
        setshowotp(false);
      }
    else{
      console.log("error");
    }

  }

  return (
    <div>
       
      {showotp?
      <>
            <div className="input-group mb-3">
<PhoneIphoneIcon/>
<input type="text "onChange={userphoneno} className="form-control"placeholder='phone' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
            <button type="submit" className="btn btn-primary"onClick={submit_phone_number}>Submit</button>
           
      </>

      :
      <div className='registerpage'>
         {success?<div className="alert alert-success" role="alert">{message}</div>:""}
         {error?<div className="alert alert-danger[0p" role="alert">{message}</div>:""}
        {/* <div className="alert alert-success" role="alert">{message}</div> */}
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
<LockOpenIcon/>
<input type="password"onChange={userpassword} className="form-control"placeholder='password' aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className='radio-btn'>
<div>
Male<input className="form-check-input"onChange={usergender} type="radio" name="gender"  value="Male" aria-label="..."/>
</div>
<div>
Female<input className="form-check-input"onChange={usergender} type="radio" name="gender"  value="Female" aria-label="..."/>
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
<input type="text"onChange={userinvitecode} className="form-control"placeholder='Invite Code' aria-label="Username" aria-describedby="basic-addon1"/>
</div>




<p>By signing up you agree to the Emerge Terms & Conditons.</p>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>
        
    </div>
      }
        
        </div>    
  )
}

export default Register