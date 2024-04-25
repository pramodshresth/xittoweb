import React from 'react'
import NavLogo from './assets/navlogo.png';
import Slider1 from './assets/Slider1.jpg';
import "./Serviceproblem.css";
import { useNavigate, useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useReducer,useState } from 'react';
const serviceprobem = () => {
  const navigate = useNavigate();
  const showproblem=()=>{
    navigate('/showproblem');
  }
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

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
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
  // console.log("this is selctedData",selectedDate);
  return (
    <div>
      <div className='container-fluid'>
      <section>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container">
 
   <img src={NavLogo} className='logo'/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
       <a class="nav-link" aria-current="page" href="#services"onClick={services}>Services</a>
       <a class="nav-link" href="#">Assistance</a>
       <a class="nav-link" href="#contactus"onClick={contactus}>Contact us</a>
       

       
     </div>
     <div>
     <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
     </div>
    
     
     
   </div>
 </div>
</nav><section className='sectionpadding all-problems'>
  <div className='container'>
<div className='row'>
<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Now</a>
  </div>
</div>




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-xl modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Service Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
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
              <span className='date'>Date</span>:<input className='datepicker' onChange={handleDateChange} type='date'/>
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














<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

</div>


<div className='row'>
<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

<div class="card col-md-3" style={{width:"18rem;"}}>
  <img src={Slider1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">This is a dell laptop with processor i5 11th genearation.This laptop is best for programming.</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>

</div>
</div>


</section>
</section>

      {/* </section> */}
      </div>
    </div>
  )
}

export default serviceprobem