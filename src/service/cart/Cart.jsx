import React ,{useReducer}from 'react'
import Navbar from '../nav/Navbar'
import Slider1 from './assets/Slider1.jpg';
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const cart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const map = storedCart.map((item, index) => [index, item.itemCount]);
    const initialState = Object.fromEntries(map);
    
    console.log("this is map",map);
    console.log("THis is initialstate",initialState);
      const reducer =(state,action)=>{
        switch(action.type){
          case 'increment':
            console.log("this is index",[action.index])
            return { ...state,[action.index]:state[action.index]+1};
          case 'decrement':
            return { ...state,[action.index]:state[action.index]-1};
          default:
            return state;
        }
      }
     
    
      const [quantity, dispatch] = useReducer(reducer, initialState);
    
    let quantityitem=[];
    for (var k in quantity){
        quantityitem.push(quantity[k]);
 
    }
    let intArray = quantityitem.map(str => parseInt(str));
    let price = storedCart.map((item, index) => parseInt(item.totalAmount));
    const Price =intArray.map((count, index) => count * price[index]);
   console.log("this is TotalAmount",Price);
   console.log("this is quantity",quantity);
   console.log("this is price",price);
    let Totalprice=0;
   for(let i=0;i<Price.length;i++)
    {
        Totalprice+=Price[i];
    }
    console.log("this is totalprice",Totalprice);
    console.log("this is storedcart",storedCart);
    const checkbox=(e)=>{
      console.log("thi is s",e);
      const x=storedCart.filter((item,index)=>{return item.bookedProblem===e});
      console.log("thi si s x filter",x);
    }
  return (
    <div>
        {/* <Navbar/> */}
        <section>
        <Navbar/>
        </section>
       

        <section>
        
            <div className='row cartlist'>
                <div className='col-md-6'>
                <div className='signinjoinus'>
                    <h3>Members get free shipping on orders $50+</h3>
                    <h6>Become a Emerge Member for fast free shipping on orders $50+ Join us or Sing-in</h6>
</div>
    {storedCart.length === 0 ?<div className='noitem'>
        <h1>Bag</h1>
        <h5>There are no items in your bag.</h5>
    </div>:
    storedCart.map((item,index)=>(
        <div className='row cartpage'>
          <div className='col-md-1'>
          <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" onChange={()=>checkbox(item.bookedProblem)}id="flexCheckChecked"/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
          </div>
<div className='col-md-3 cartcard'>

<img src={Slider1} class="cart-img-x card-img-top" alt="..."/>
                    {/* <div class="cartcard card">
                    </div> */}

 </div>

 <div className='col-md-5'>
    <h1>{item.selectedBrand}</h1>
    <h4>{item.name}</h4>
    <h3>{Price[index]}</h3>

    <div className='quantitylist'>
            <label className='quantity'>Quantity:</label>&nbsp;
            <div className='add'onClick={() => dispatch({ type: 'increment',index })}>
              <AddIcon className='addicon'/>
              </div>
              <span className='quantity'>&nbsp;{quantity[index]}&nbsp;</span>
              <div className='subtract'onClick={() => dispatch({ type: 'decrement',index })}>
              <RemoveIcon className='subtracticon'/>
              </div>
            </div>

                    </div>

            
</div>

    ))

    }

</div>

                <div className='col-md-6'>
                    <h1>Summary</h1>
                    <h3>Total:{Totalprice}</h3>

                </div>

                

            </div>
            {/* <div className='row'>
                    <div className='col-md-6'>
                    <div class="cartcard card">
                    </div>

                    </div>
                </div> */}
            
        </section>

        
        </div>
  )
}

export default cart