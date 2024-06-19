import React, {useState, useEffect } from 'react'
import Navbar from '../nav/Navbar'
import { useLocation } from 'react-router-dom';
import { Filterbookingbyassistance,token } from '../../api/ApI';
import axios from 'axios';
const WorkerView = ({Isworker,IsUser,setIsUser}) => {
    console.log("this is from workerview");
    const { state } = useLocation();
    console.log("this is state",state);
    useEffect(()=>{
        setIsUser(false);
    },[setIsUser])
    console.log("this is ISuser from worker view",IsUser)
    const[Data,setData]=useState();
    const pendingbutton=async()=>{
      try {
        const response = await axios.get(
          'http://68.183.85.139:9000/api/v1/booking/assistance/filter?status=pending',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('this is response', response);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      // try {
      //   const response = await axios.get(`http://68.183.85.139:9000/api/v1/booking/assistance/filter?status=pending`, {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      //   console.log("this is response",response);
      //   return setData(response.data.data);
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }

    }
    console.log("this is data",Data);
  return (
    <div>
        {/* <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/> */}
        <div className='view'>
        <button onClick={pendingbutton}className='workerview'>Pending</button>
        <button className='workerview'>Appoint</button>
        <button className='workerview'>Onwork</button>
        <button className='workerview'>Completed</button>

        </div>

        </div>
  )
}

export default WorkerView