import { useEffect, useState } from 'react'
import Navbar from '../nav/Navbar'
import { fetchworker,token } from '../../api/ApI';
import axios from 'axios';
import './worker.css';
import { useNavigate } from 'react-router-dom';
const worker = ({Isworker,setIsUser,IsUser}) => {
    const navigate=useNavigate();

    const[Worker,setWorker]=useState([]);
    const[pendingworker,setpendingworker]=useState([]);
    useEffect(()=>{
        setIsUser(false);
        const fetchData = async () => {
          try {
            const response = await axios.get(fetchworker(), {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
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

    const addassistance=()=>{

    }
    const assistance=(categoryname)=>{
      console.log("this is category name",categoryname);
      navigate('/workerview',{state:categoryname});

    }
    

  return (
    <div>
      <section>
        <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/>
      </section>

      <section className='container workerlist'>
        <p className='yourcurrentassis'>Your Current Assistance</p>
        <button type="button"data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addassistance}>Add Asssistance</button>
        
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        {
          Worker.map((item,index)=>(
            <label onClick={()=>assistance(item.category.name)} key={index}className='serviceslist'>
    
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
    </div>
  )
}

export default worker
