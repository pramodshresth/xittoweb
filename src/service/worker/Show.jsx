
import Navbar from '../nav/Navbar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Home.css';
import PropTypes from 'prop-types';
const Show = ({Isworker,IsUser,setIsUser}) => {
    const {state}=useLocation();
    console.log("this is state",state)
    useEffect(()=>{
        setIsUser(false);
    },[setIsUser])

    console.log("state",)
  return (
    <div>
        <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/> 
        <div className='show-details'>
        <p><b>bookedBy:</b></p>
        <img src={JSON.parse(state.bookedBy).profile_url}/>
        <p>Name:{JSON.parse(state.bookedBy).name}</p>
        <p>Phone:{JSON.parse(state.bookedBy).phone}</p>

        <p><b>booked Problem:</b></p>
        <p>imagePath:</p>
        <img className='col-md-1' src={JSON.parse(state.bookedProblem).imagePath}/>
        <p>shortDescription:</p>
        <p>{JSON.parse(state.bookedProblem).shortDescription}</p>
        <p>Price:{JSON.parse(state.bookedProblem).price}</p>
        <p>Category name:{JSON.parse(state.bookedProblem).categoryName}</p>

        <p><b>Details:</b></p>
        <p>created_at:{state.created_at}</p>
        <p>updated_at:{state.updated_at}</p>
        <p>selected Brand:{state.selectedBrand}</p>
        <p>bookedDate:{state.bookedDate}</p>
        <p>itemCount:{state.itemCount}</p>
        <p>completedDate:{state.completedDate}</p>
        <p>timeperiod:{state.timePeriod}</p>
        <p>problemimterval:{state.problemInterval}</p>
        <p>description:{state.description}</p>
        <p>status:{state.status}</p>
        <p>orderid:{state.orderId}</p>
        <p>transaction mode:{state.transactionMode}</p>
        </div>
        
    </div>
  )
}
Show.propTypes = {
  Isworker: PropTypes.bool,
  IsUser: PropTypes.bool,
  setIsUser:PropTypes.bool
};
export default Show