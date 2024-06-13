import React,{useEffect,createContext,useContext} from 'react'
import NavLogo from './assets/navlogo.png';
import Slider1 from './assets/Slider1.jpg';
import "./Serviceproblem.css";
import { useNavigate, useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SiteVisitor from './assets/Sitevisitor.svg';
import xittofooterimage from './assets/xittoblueimage.png';
import { useReducer,useState } from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DatePicker from "react-datepicker";
import {FetchProblem,token} from '../api/ApI.jsx';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Navbar from './nav/Navbar.jsx';
import {Context} from '../App';
// const CartContext = createContext();
const serviceprobem = () => {
  // const usercart= useContext(CartContext);
  let [cart,setcart]=useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
});

  const {setcartlength}=useContext(Context);
  let accessToken = localStorage.getItem('accessToken');
  const { state } = useLocation();
  const navigate=useNavigate();
  const[Data,setData]=useState();
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
 
  const showproblem=()=>{
    navigate('/showproblem');
  }
  const[problemsdetail,setproblemsdetail]=useState(" ");
  const[gotocart,setgotocart]=useState(false)
  const booknow=(bookid)=>{

//     const x=problemsdetail[0].brands.map((item,index)=>{
//   console.log(item.name);
// })
// console.log("this is x",x);
     console.log("this is item",bookid);
    console.log("this is data",Data);
    const problemdetail=Data.filter((item,index)=>{
      return item.id===bookid;
    })

    // Check if the filtering returned any result
      const brand = problemdetail[0].brands.map((item, index) => {
        console.log(item);
        return item.name; // Return the item if you want to use the resulting array
      });
      
      // console.log("this is x", problemdetail[0].brands);
      // console.log("this is brand", brand);
 
 


   
    setproblemsdetail(problemdetail);
    console.log("this is accessTOKEN",accessToken);

    if(accessToken===null)
      {
        navigate('/login');
      }
console.log("this is cart fdsadadfa",cart);
// console.log("this is problemsdetail",problemsdetail)

// useEffect(()=>{
  for(let i=0;i<cart.length;i++)
    {
      if(cart[i].bookedProblem===problemdetail[0].id){
        console.log("go to the cart");
        setgotocart(true);
        break;
      }
      else
      {
        console.log("add to cart");
        setgotocart(false);
      }
    }
  }

  console.log("this is gotocart",gotocart);



  
  let[selectedDate, setSelectedDate] = useState('');
  const initialState={
    count:1
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
  console.log("this is quantity and count",quantity);
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
      case 'RESET_TIME':
          return { ...state, time: '' }; // Reset time to empty string
      default:
        return state;
    }
  }


  const [time,dispatch2]=useReducer(reducer2,initialState2);



  const initialState3={
    probleminterval:""
  }
  const reducer3=(state,action)=>{
    switch (action.type) {
      case 'Recently':
        return { ...state, probleminterval: 'Recently' }; // Return updated state object
      case 'Morethanmonth':
        return {...state,probleminterval:'More than month'};
      case 'Morethanyear':
        return {...state,probleminterval:'More than year'};
      
      case 'RESET_TIME':
          return { ...state,probleminterval:''}; // Reset time to empty string
      default:
        return state;
    }
  }
  const [probleminterval,dispatch3]=useReducer(reducer3,initialState3);

  console.log("this is probleminterval ",probleminterval);
  console.log("this is afsdasdfasfdafasdfsadfasdfdsfasdf",probleminterval.probleminterval)
  const services=()=>{
    navigate('/#services');
  }
  const contactus=()=>{
    navigate('/contactus');
  }
  useEffect(() => {
    AOS.init();
  }, []);

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
  }
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    
    setSelectedOption(event.target.value);
    console.log("this is slee",event.target.value);
  };
  console.log("this is selectedoption",selectedOption);
  const[userdescription,setuserdescription]=useState('');
  const description=(e)=>{
    const x=e.target.value;
    setuserdescription(x);
  }
  const book=()=>{
   const date={
    day:selectedDate.day,
    month:selectedDate.month,
    year:selectedDate.year,

    }
    
   
    const userdetails={
      bookedProblem:problemsdetail[0].id,
      itemCount:quantity.count,
      selectedBrand:selectedOption,
      totalAmount:problemsdetail[0].price * quantity.count,
      bookedDate:`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`,
      timePeriod:time.time,
      problemInterval:probleminterval.probleminterval,
      description:userdescription,
      location:'panauti'
    }
    console.log(userdetails);
  }


const[emptybrand,setemptybrand]=useState('');
const[emptydate,setemptydate]=useState('');
const[emptytime,setemptytime]=useState('');
const[emptyprobleminterval,setemptyprobleminterval]=useState('')
const[emptydescription,setemptydescription]=useState('');
const[disabled,setdisabled]=useState(false);
const[IsVisible,setIsVisible]=useState(false);
  const addtocart = () => {
    // const date = {
    //     day: selectedDate.day,
    //     month: selectedDate.month,
    //     year: selectedDate.year,
    // };

    

    const userdetails = {
        bookedProblem: problemsdetail[0].id,
        itemCount: quantity.count,
        selectedBrand: selectedOption,
        totalAmount: problemsdetail[0].price,
        bookedDate:`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`,
        timePeriod: time.time,
        problemInterval: probleminterval.probleminterval,
        description: userdescription,
        location: 'panauti',
        status:'appoint',
        redeemAmount:0,
        // imagePath:problemsdetail[0].imagePath,
        name:problemsdetail[0].name,
    };
  if(selectedOption==='')
    {
     
      setemptybrand('please do select the Brand');
    }
  else{
    setemptybrand('');

  }
  if(selectedDate==='')
    {
      setemptydate("please do select the date");
      
    }
  else{
    setemptydate('');
  }
  
  if(time.time==='')
    {
    
      setemptytime("please do select the time");
    }
  else
  {
    setemptytime('');
  }
  if(probleminterval.probleminterval==='')
    {
      setemptyprobleminterval("please do select the probleminterval");
    }
  else
  {
    setemptyprobleminterval('');
  }
  if(userdescription==='')
    {
      setemptydescription("please do select the description");
    }
  else
  {
    setemptydescription('');
  }
  if(selectedOption!==''&&selectedDate!==''&&time.time!==''&&probleminterval.probleminterval!==''&&userdescription!=='')
  {
    setcart([...cart, userdetails]);
    setdisabled(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      // navigate('/');
      // window.location.reload();
    }, 3000);
    
setIsVisible(true);
    return () => {
  //     isVisible=true;
  //   wrongpassword=false;
      clearTimeout(timer);
      
     
    };
  }

    
}

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("this is cart",cart);
// setcartlength(cart)
    
}, [cart]);

setcartlength(cart.length);

const closenow=()=>{  ///if user closes the page then it will reset everydata
  setSelectedOption("");
  setSelectedDate('');
  dispatch2({ type: 'RESET_TIME'});
  dispatch3({ type: 'RESET_TIME'});
  setuserdescription('');
}
const goincart=()=>{
  navigate('/cart');
}
console.log("this is is visible",IsVisible);

// },[gotocart])

  // console.log("this  is gotocart",gotocart);
  return (
   <div>
<section  className="back-img-0">
  <Navbar/>
  {
            IsVisible?<div class="alert alert-success" role="alert">Cart Added Succesfully.</div>:""
          }

    <div data-aos="zoom-in" className="container">
      <div className="row">
        <div className="col-md-12">
        <div className='serviceproblem'>
         
          {
            Data===undefined ?"":Data.map((item,index)=>(
              <div key={index} class="card problemlist">
                <img src={Slider1}class="card-img-top"/>
                <div class="card-body problem-body">
                <h5 class="card-title">{item.name}</h5>
                <a href="#"data-bs-toggle="modal"onClick={()=>booknow(item.id)} data-bs-target="#bookingexampleModal" class="btn btn-primary">Book Now</a>
              </div>

              </div>
            ))
          }
          
            
            </div>
        </div>
      </div>
    </div>
</section>
{/*  */}
<div class="modal fade" id={`${accessToken===null?"":"bookingexampleModal"}`}tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-xl modal-dialog" >
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={closenow}></button>
        <h5 class="modal-title" id="exampleModalLabel">Service Title</h5>

      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img src={Slider1}className='problemimage'alt='Slider1'/>
            </div>
            <div className='problemname'>
              {problemsdetail[0].name}
            </div>

            
            <div className='problem-description'>
            <p>{problemsdetail[0].shortDescription}</p>
            </div>
            <div className='booking-time'>
              <span className='esttime'>EstTime</span>:{problemsdetail[0].estTime}hrs
            </div>
            <div className='price'>
              {
               problemsdetail[0].price * quantity.count}Rs
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
              <p className='empty'>{emptybrand}</p>
              <span className='brands'>Select Brands</span>
              <select onChange={handleSelectChange}value={selectedOption} class="form-select" aria-label="Default select example">
                 <option selected>Open this select menu</option>
              {
  problemsdetail[0].length===1?"":problemsdetail[0].brands.map((item,index)=>(
    <option value={item.name}>{item.name}</option>
  ))
}
<select/>
</select>
            </div>
          <div className='dateandtime'>
            <span className='empty'>{emptydate}</span>
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
 
  <div className={`day `}onClick={()=>setSelectedDate({dayname:dayname[0],day:day[0],month:month[0],year:year[0]})}>
              

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
            <p className='empty'>{emptytime}</p>
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

            <div>
              <p className='empty'>{emptyprobleminterval}</p>
              <h1 className='prob-interval'>Problem Interval</h1>
              <div className='probleminterval'>
            <div className={`${probleminterval.probleminterval==='Recently'?'clicked':""} period`}onClick={() => dispatch3({ type: 'Recently' })}>
              Recently
              </div>
              <div className={`${probleminterval.probleminterval==='More than month'?'clicked':""} period`}onClick={() => dispatch3({ type: 'Morethanmonth' })}>
                More than month
              </div>
              <div className={`${probleminterval.probleminterval==='More than year'?'clicked':""} period`}onClick={() => dispatch3({ type: 'Morethanyear' })}>
                More than Year
              </div>
              
              </div>
            </div>


            {/* <input type='text'className='user-location'/> */}

            <div class="form-floating">
            <p className='empty'>{emptydescription}</p>
            <h1 className='prob-interval'>Description</h1>
  <input type="text"class="form-control"value={userdescription} onChange={description} placeholder="Write Here" id=""/>
  {/* <label for="floatingTextarea">Comments</label> */}
</div>

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

            <div class="row modal-footer">
     
        <button type="button" class="col-md-6 col-sm-6 col-6 booked-btn btn-primary"onClick={book}><span className='book'>Book</span></button>
        {
          gotocart? <button type="button" class="col-md-6 col-sm-6 col-6 booked-btn btn-primary"onClick={goincart}><span className='addtocart'>GO TO CART</span></button>: <button type="button" class="col-md-6 col-sm-6 col-6 booked-btn btn-primary"onClick={addtocart} disabled={disabled}><span className='addtocart'>ADD TO CART</span></button>
        }
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