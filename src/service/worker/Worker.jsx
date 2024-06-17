import { useEffect, useState } from 'react'
import Navbar from '../nav/Navbar'
import { fetchworker,token } from '../../api/ApI';
import axios from 'axios';
import './worker.css';
const worker = ({Isworker,setIsUser,IsUser}) => {

    const[Worker,setWorker]=useState([]);
    const[pendingworker,setpendingworker]=useState([]);
    useEffect(()=>{
        setIsUser(false);
        const fetchData = async () => {
          try {
            const response = await axios.get(fetchworker(), {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            console.log("thsi isresponse bla blabla",response);
            const worker=response.data.data.assistance.filter((item,index)=>item.approved===true);
            
            setWorker(worker);

            const pendingworker=response.data.data.assistance.filter((item,index)=>item.approved !==true)
            
            setpendingworker(pendingworker)
            // return setData(response.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();

    },[setIsUser])

    console.log("this is worker pawan",Worker)
    console.log("this is pendingoworker",pendingworker);
    

  return (
    <div>
      <section>
        <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/>
      </section>

      <section className='container workerlist'>
        <p className='yourcurrentassis'>Your Current Assistance</p>
        {
          Worker.map((item,index)=>(
            <label key={index}className='serviceslist'>
    
            <img className='services-logo'src={item.category.imagePath}/>
            <p className='services-name'>{item.category.name}</p> 
          </label>
          ))
        }
        <p className='yourcurrentassis'>Your Pending Assistance</p>

        {
          pendingworker.map((item,index)=>(
            <label key={index}className='serviceslist'>
    
            <img className='services-logo'src={item.category.imagePath}/>
            <p className='services-name'>{item.category.name}</p> 
          </label>
          ))
        }
        
        
      </section>
        {/* <p>Hello world</p> */}
    </div>
  )
}

export default worker
