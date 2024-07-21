import {useReducer, useState } from 'react'
import Navbar from '../nav/Navbar'
import Slider1 from './assets/Slider1.jpg';
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CreateBooking } from '../../api/ApI.jsx';
import PropTypes from 'prop-types';
const Cart = ({Isworker,IsUser}) => {
  // const[storedCart,setstoredCart]=useState('')
  let storedCart = JSON.parse(localStorage.getItem('cart')) || [];//this is total data from local storage for staying in cart

  console.log("this is storedCart", storedCart);
  const map = storedCart.map((item, index) => [index, item.bookingDetails.itemCount]);
  console.log("this is map", map);
  const [show, setshow] = useState(false);
  const [successfullbooking, setsuccessfullbooking] = useState([]);
  const [IsVisible, setIsVisible] = useState(null);
  // const[decrement,setdecrement]=useState();
  const initialState = Object.fromEntries(map);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        // console.log("this is index",[action.index])
        setshow(true);
        return { ...state, [action.index]: state[action.index] + 1 };
      case 'decrement':
        setshow(true);
        return { 
          ...state, 
          [action.index]: state[action.index] > 1 ? state[action.index] - 1 : 1 
        };
        // return { ...state, [action.index]: state[action.index] - 1 };
      default:
        return state;
    }
  }


  const [quantity, dispatch] = useReducer(reducer, initialState);
  console.log("this is quantity", quantity);
  let quantityitem = [];
  for (var k in quantity) {
    quantityitem.push(quantity[k]);

  }
  let intArray = quantityitem.map(str => parseInt(str));
  console.log("This is intArray", intArray);
  // let fixedprice;
  // let ChangedPrice;
  // if(increment==='increment')
  //   {
  let fixedprice;
  let ChangedPrice;

  fixedprice = storedCart.map((item) => parseInt(item.paymentDetails.totalAmount));
  // if(show===true)
  //   {
  ChangedPrice = intArray.map((count, index) => count * fixedprice[index]);

  // }






  // }
  // else{

  // }



  console.log("this is intArray", intArray);
  console.log("this is fixed price00", fixedprice)
  console.log("this is changedprice", ChangedPrice)
  let Totalprice = 0;
  for (let i = 0; i < ChangedPrice.length; i++) {
    Totalprice += ChangedPrice[i];
  }
  // console.log("this is changedprice",ChangedPrice);
  console.log("this is fixed price", fixedprice);
  let [userAmount, setUserAmount] = useState([]);
  

  const checkbox = (e, check) => {
    if (check) {
      const x = storedCart.filter((item, index) => index === e);
      const data = {
        index: e,
        data: x
      };
      setUserAmount([...userAmount, data]);
    } else {
      const updatedUserAmount = userAmount.filter((item) => item.index !== e);
      setUserAmount(updatedUserAmount);
    }
  };

  console.log("this is useramount", userAmount);





  let finaloutput = userAmount.map((item) => {
    const price = ChangedPrice[item.index]

    return item.data.map((item) => {
      return { ...item, totalAmount: price }
    });
  })

  if (finaloutput === '') {
    console.log("please select the item");
  }


  const Price = finaloutput.map((item) => {
    return item.map((item) => {
      return item.totalAmount;
    });
  })
  let TotalAmount = 0;
  const combinedArray = [].concat(...Price);
  combinedArray.forEach((item) => {
    TotalAmount += item;
  });
  let accessToken = localStorage.getItem('accessToken');
  console.log("this is combine", combinedArray);
  const placeorder = async () => {
    const x = finaloutput.map((item) => {
      return item.map((item) => {
        return item
      });
    })
    const combinedArray = [].concat(...x);
    console.log("this is placeorder", x);
    console.log("this is combinedArray", combinedArray);
    for (let i = 0; i < combinedArray.length; i++) {
      const data = combinedArray[i];
      console.log("this is data", data);
      try {
        const response = await fetch(CreateBooking(), {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          console.log("booking unsuccesful");
        }

        const result = await response.json();
        console.log("this is result", result);

        if (response.ok) {

          const timer = setTimeout(() => {
            setIsVisible(false);
            // navigate('/');
            // window.location.reload();
          }, 3000);

          setIsVisible(true);
          setsuccessfullbooking([...combinedArray]);
          console.log("this is data", data);
          console.log("booking successfull congrats")
          return () => {
            //     isVisible=true;
            //   wrongpassword=false;
            clearTimeout(timer);


          };

          
        }
      } catch (error) {
        console.error('There was an error:', error);
      }

    }

  }

    if(IsVisible===false)
      {
        const data=successfullbooking.map((item)=>{return item.bookingDetails.bookedProblem})
        const filtercart=storedCart.filter((item,index)=>item.bookingDetails.bookedProblem !== data[index])
        console.log("this is filtercart",filtercart);
        console.log("this is storedCart",storedCart);
        console.log("this is data",data);
        localStorage.removeItem('cart');
        localStorage.setItem('cart',JSON.stringify(filtercart));
        // window.location.reload();
      }
      console.log("this is isvisibe",IsVisible);

 
  
  console.log("this is successfull booking", successfullbooking);
  const[deletedsuccessfully,setdeletedsuccessfully]=useState(null);
  const Delete = (deleteid) => {
    console.log("this is ", storedCart);
    // const x=storedCart.filter((item,index)=>item.data[0].bookedProblem !== deleteid);
    // console.log("this is x",x);
    const remainingcart = storedCart.filter((item) => item.bookingDetails.bookedProblem !== deleteid);
    console.log("this is x", remainingcart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(remainingcart));

    const timer = setTimeout(() => {
      setdeletedsuccessfully(false);
    }, 3000);

    setdeletedsuccessfully(true);
  
    return () => {
      clearTimeout(timer);
    };
  }
  storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  return (
    <div>
      <section>
        <Navbar Isworker={Isworker} IsUser={IsUser}/>
        {
            IsVisible ? <div className="alert alert-success" role="alert">
              Congratulations.Booked Succesfully
            </div> : ""
          }
          {
            deletedsuccessfully?<div className="alert alert-success" role="alert">
            Congratulations.Deleted Succesfully
          </div>:""
          }

      </section>



      <section>



        <div className='row cartlist'>
          
          

          <div className='col-md-6'>
            <div className='signinjoinus'>
              <h3>Members get free shipping on orders $50+</h3>
              <h6>Become a Emerge Member for fast free shipping on orders $50+ Join us or Sing-in</h6>
            </div>
            {storedCart.length === 0 ? <div className='noitem'>
              <h1>Bag</h1>
              <h5>There are no items in your bag.</h5>
            </div> :
              storedCart.map((item, index) => (
                <>
                <div className='row cartpage'>
                  <div className='col-md-1'>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" onChange={(e) => checkbox(index, e.target.checked)} id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Checked checkbox
                      </label>
                    </div>
                  </div>
                  <div className='col-md-3 cartcard'>

                    <img src={Slider1} className="cart-img-x card-img-top" alt="..." />
                  </div>

                  <div className='col-md-5'>
                    <input type='button' onClick={() => Delete(item.bookingDetails.bookedProblem)} value="Delete" />
                    <h1>{item.bookingDetails.selectedBrand}</h1>
                    {/* <h4>{item.name}</h4> */}
                    <h3>{fixedprice[index]}</h3>

                    <div className='quantitylist'>
                      <label className='quantity'>Quantity:</label>&nbsp;
                      <div className='add' onClick={() => dispatch({ type: 'increment', index })}>
                        <AddIcon className='addicon' />
                      </div>
                      <span className='quantity'>&nbsp;{quantity[index]}&nbsp;</span>
                      <div className='subtract' onClick={() => dispatch({ type: 'decrement', index })}>
                        <RemoveIcon className='subtracticon' />
                      </div>

                    </div>
                  </div>
                </div>
                </>))
            
            }
          
          </div>
          <div className='col-md-5'>
            <div className='total'>
              <h1>Summary</h1>
              <h3>subtotal:{TotalAmount}</h3>
              <h3>Estimated Shipping Charge(workercharge):</h3>
              <h3>Estimated Service charge:</h3>
              <h3>Discount:</h3>
              <label className='promocode'><h3>PromoCode:</h3>
                <input type="text" className="promo form-control" />
              </label>

              <button type="button" className="btn btn-warning mt-4 mb-4 " onClick={placeorder}>PlaceOrder</button>

              <h4></h4>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}
Cart.propTypes = {
  Isworker: PropTypes.bool,
  IsUser: PropTypes.bool,
  setIsUser:PropTypes.bool
};
export default Cart