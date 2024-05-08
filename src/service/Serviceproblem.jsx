import React,{useEffect} from 'react'
import NavLogo from './assets/navlogo.png';
import Slider1 from './assets/Slider1.jpg';
import "./Serviceproblem.css";
import { useNavigate, useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import Top_shapes from './assets/Top_shapes.svg'
import SiteVisitor from './assets/Sitevisitor.svg';
import xittofooterimage from './assets/xittoblueimage.png';
import { useReducer,useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DatePicker from "react-datepicker";
import {FetchProblem,token} from '../api/ApI.jsx';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// const[futureDayName,setfutureDayName]=useState([]);
const serviceprobem = () => {
  const { state } = useLocation();
  // const [startDate, setStartDate] = useState(new Date());
  // console.log("this is startData",startDate);
  const[Data,setData]=useState();
  console.log("this is state",state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${FetchProblem()}/${state}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("this is dataafdadsf",Data);
  const navigate = useNavigate();
  const showproblem=()=>{
    navigate('/showproblem');
  }

  
  let[selectedDate, setSelectedDate] = useState('');
  console.log(selectedDate)
  const initialState={
    count:0
  };
  const reducer =(state,action)=>{
    switch(action.type){
      case 'increment':
        return { ...state,count:state.count+1};
      case 'decrement':
        return { ...state,count:state.count-1};
      default:
        return state;
    }
  }

  const [quantity, dispatch] = useReducer(reducer, initialState);

  const initialState2={
    time:""
  }
  const reducer2=(state,action)=>{
    switch (action.type) {
      case '9amto11pm':
        return { ...state, time: '9amto11pm' }; // Return updated state object
      case '12amto2pm':
        return {...state,time:'12amto2pm'};
      case '2amto2pm':
        return {...state,time:'2amto2pm'};
      case '2pmto4pm':
        return {...state,time:'2pmto4pm'};
      case '4pmto6pm':
        return {...state,time:'4pmto6pm'};
      default:
        return state;
    }
  }


  const [time,dispatch2]=useReducer(reducer2,initialState2);
  console.log("this is",time.time);

  const services=()=>{
    navigate('/#services');
  }
  const contactus=()=>{
    navigate('/contactus');
  }
  useEffect(() => {
    AOS.init();
  }, []);
  console.log("hello");
  let day=[];
  let dayname=[];
  let month=[];
  let year=[];
  for(let i=0;i<=5;i++)
  {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + i);
  var futureDay = currentDate.getDate();
  var futureMonth = currentDate.getMonth() + 1; 
  var futureYear = currentDate.getFullYear();
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var futureDayName = dayNames[currentDate.getDay()]; // Get the day name from the array using getDay()
  day.push(futureDay);
  var abbreviatedDayName = futureDayName.slice(0, 3);
  dayname.push(abbreviatedDayName);
  month.push(futureMonth);
  year.push(futureYear);

  console.log("Future Date: " + futureDayName + ", " + futureDay + "/" + futureMonth + "/" + futureYear);
  }
  console.log("this is futuredaylist",day);
  console.log("this is day name",dayname);
  console.log("this is month",month);
  console.log("this is year",year);
  return (
    <div>
<section  className="back-img-0">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container">
 
   <img src={NavLogo} className='logo'/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
       <a class="nav-link" aria-current="page" href="#services">Services</a>
       <a class="nav-link" href="#assistance">Assistance</a>
       <a class="nav-link" href="#contact"onClick={contactus}>Contact us</a>
      
       

       
     </div>
     
     <div>
     <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
     </form>
     </div>
     <div className='login'>
        
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <PermIdentityIcon/>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Login</a></li>
    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal2" href="#">Register</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>


  </ul>
</div>




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        <h5 class="modal-title" id="exampleModalLabel">Please Login to XITTOO</h5>
      </div>
      <div class="modal-body login">
        <input type='text'className='login-user'placeholder='Phone Number'/>
        <input type='password'className='user-phonenumber'placeholder='Password'/>
        <p className='forgotpassword'>Forgot Password ?</p>
        <button type="button" class="btn login-save-btn btn-primary">Login</button>
        
        <p className='signuplink'>New member ? <span data-bs-toggle="modal" data-bs-target="#exampleModal2" className='signup'>Signup ..</span></p>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        <h5 class="modal-title" id="exampleModalLabel">Please Register to XITTOO</h5>

        
      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-md-6'>
        <input type='text'className='login-user'placeholder='Name'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='phone'/>
        </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
        <input type='password'className='login-user'placeholder='password'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='gender'/>
        </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
        <input type='text'className='login-user'placeholder='district'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='address'/>
        </div>
        </div>
        <div className='row'>
        <div class="mb-3">
  
  <input class="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
        </div>
      </div>
    
    </div>
  </div>
</div>
       </div>
    
     
     
   </div>
 </div>
</nav>
    <div data-aos="zoom-in" className="container">
      <div className="row">
        <div className="col-md-12">
        <div className='serviceproblem'>
          {
            Data===undefined ?"":Data.map((item,index)=>(
              <div key={index} class="card problemlist">
                <img src={item.imagePath}class="card-img-top"/>
                <div class="card-body problem-body">
                <h5 class="card-title">{item.name}</h5>
                <a href="#"data-bs-toggle="modal" data-bs-target="#bookingexampleModal" class="btn btn-primary">Book Now</a>
              </div>

              </div>
            ))
          }
          
            
            </div>
        </div>
      </div>
    </div>
</section>
<div class="modal fade" id="bookingexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-xl modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h5 class="modal-title" id="exampleModalLabel">Service Title</h5>

      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img src={Slider1}className='problemimage'alt='Slider1'/>
            </div>
            <div className='problemname'>
              Screen Problem
            </div>
            
            <div className='problem-description'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with</p>
            </div>
            <div className='booking-time'>
              <span className='esttime'>EstTime</span>:30hrs
            </div>
            <div className='price'>
              200$
            </div>
            <div className='quantitylist'>
            <label className='quantity'>Quantity:</label>&nbsp;
            <div className='add'onClick={() => dispatch({ type: 'increment' })}>
              <AddIcon className='addicon'/>
              </div>
              <span className='quantity'>&nbsp;{quantity.count}&nbsp;</span>
              <div className='subtract'onClick={() => dispatch({ type: 'decrement' })}>
              <RemoveIcon className='subtracticon'/>
              </div>
            </div>
            
            
            <label>

            </label>
          </div>
          <div className='col-md-6'>
            <form>
          <div>
              <span className='brands'>Select Brands</span>
              <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
            </div>
          <div className='dateandtime'>
            <p>Date:{selectedDate.day}-{selectedDate.month}-{selectedDate.year}</p>
            <div className='firstsixdays'>
            <div className='day'>
  <DateRangeIcon className='date-icon'/>
  <DatePicker className="date-33"  onChange={(date) => {
    const formattedDate = new Date(date);
    const selectedDateObject = {
      day: formattedDate.getDate(),
      dayname: formattedDate.toLocaleDateString('en-US', { weekday: 'short' }),
      month: formattedDate.getMonth() + 1, // Month is zero-based, so add 1
      year: formattedDate.getFullYear()
    };
    setSelectedDate(selectedDateObject);
  }}
  />
  </div>
  {/*  */}
  <div className='day'onClick={()=>setSelectedDate({dayname:dayname[0],day:day[0],month:month[0],year:year[0]})}>
              

                <p className='date'>{day[0]}</p>
                <p className='dayname'>{dayname[0]}</p>
              </div>
              <div className='day'onClick={()=>setSelectedDate({dayname:dayname[1],day:day[1],month:month[1],year:year[1]})}>
              <p className='date'>{day[1]}</p>
<p className='dayname'>{dayname[1]}</p>

</div>
<div className='day'onClick={()=>setSelectedDate({dayname:dayname[2],day:day[2],month:month[2],year:year[2]})}>
<p className='date'>{day[2]}</p>
<p className='dayname'>{dayname[2]}</p>


</div>
<div className='day'onClick={()=>setSelectedDate({dayname:dayname[3],day:day[3],month:month[3],year:year[3]})}>
<p className='date'>{day[3]}</p>
<p className='dayname'>{dayname[3]}</p>

</div>
<div className='day'onClick={()=>setSelectedDate({dayname:dayname[4],day:day[4],month:month[4],year:year[4]})}>
<p className='date'>{day[4]}</p>
<p className='dayname'>{dayname[4]}</p>


</div>
<div className='day'onClick={()=>setSelectedDate({dayname:dayname[5],day:day[5],month:month[5],year:year[5]})}>
<p className='date'>{day[5]}</p>
<p className='dayname'>{dayname[5]}</p>


</div>

            </div>
              {/* <span className='date'>Date</span>:<input className='datepicker' onChange={handleDateChange} type='date'/> */}
            </div>
            
            <p className='time'>Time:</p>
            <div className='Time_period'>
              
              <div className={`${time.time==='9amto11pm'?"clicked":""} period`} onClick={() => dispatch2({ type: '9amto11pm' })}>
                9:00Am to 11Am
              </div>
              <div className={`${time.time==='12amto2pm'?"clicked":""} period`} onClick={() => dispatch2({ type: '12amto2pm' })}>
                12:AM to 2PM
              </div>
              <div className={`${time.time==='2amto2pm'?"clicked":""} period`} onClick={() => dispatch2({ type: '2amto2pm' })}>
                2:AM to 2PM
              </div>
              <div className={`${time.time==='2pmto4pm'?"clicked":""} period`}  onClick={() => dispatch2({ type: '2pmto4pm' })}>
                2:PM to 4PM
              </div>
              <div className={`${time.time==='4pmto6pm'?"clicked":""} period`}onClick={() => dispatch2({ type: '4pmto6pm' })}>
                4:PM to 6PM
              </div>
            </div>
            <label className='location'>
              Location:
            </label>
            <input type='text'className='user-location'/>
            <div className='transactionmode'>
            <label>
                <input
                    type='radio'
                    value='cash'
                    name='transaction'
                    className='cash'
                />
                Cash
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input
                    type='radio'
                    value='other'
                    name='transaction'
                    className='other'
                />
                Other
            </label>

            
            </div>

            <div class="modal-footer">
     
        <button type="button" class="booked-btn btn-primary">Book</button>
      </div>
      </form>
           
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</div>





      {/* <section> */}
      <section >
  <div data-aos="zoom-in" className='foot'>
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
     
      
      



     </div>
  )
}

export default serviceprobem