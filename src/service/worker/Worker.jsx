import { useEffect, useState } from 'react'
import Navbar from '../nav/Navbar'
import { fetchworker,token,FetchCategoryData,RegisterProfessional } from '../../api/ApI';
import axios from 'axios';
import './worker.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const Worker = ({Isworker,setIsUser,IsUser}) => {
    const navigate=useNavigate();

    const[Worker,setWorker]=useState([]);
    const[pendingworker,setpendingworker]=useState([]);
    const[category,setcategory]=useState([]);
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
            const worker=response.data.data.assistance.filter((item)=>item.approved===true);
            
            setWorker(worker);

            const pendingworker=response.data.data.assistance.filter((item)=>item.approved !==true)
            
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
      navigate('/home',{state:categoryname});

    }
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(FetchCategoryData(), {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          });
          return setcategory(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    const[selectedcategory,setselectedcategory]=useState();
    const categorybtn=(e)=>{
      const x = e.target.value;
    // console.log("this is data",Data);
    // console.log("this is id",x);
    setselectedcategory(x);
    }
    const[workerlevelofassistance,setworkerlevelofassistance]=useState()
    const levelofassistance = (e) => {
      const x = e.target.value;
      setworkerlevelofassistance(x);
      console.log("this is level of experience", x);
    }
    const[workerdailybill,setworkerdailybill]=useState();
    const daily_bill=(e)=>{
      setworkerdailybill(e.target.value);
    }
    const[workerexperience,setworkerexperience]=useState();
    const experience=(e)=>{
      setworkerexperience(e.target.value);
    }
    const[workeremail,setworkeremail]=useState();
    const email=(e)=>{
      setworkeremail(e.target.value);
    }
    const[message,setmessage]=useState();
    const[IsVisible,setIsVisible]=useState();
    const save=async()=>{
      const data = {
      mail: workeremail,
      category: selectedcategory,
      availability: "active",
      level_of_assistance: workerlevelofassistance,
      daily_bill: workerdailybill,
      experience: workerexperience
    } 
    try {
      const response = await fetch(RegisterProfessional(), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.log("error")
        const data = await response.json();
        console.log("not register successfull", data);
        console.log("this is data.message", data.message);
        setmessage(data.message);
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
        setIsVisible(true);
        return () => {
          clearTimeout(timer);
        };
      }
      else {
        const data = await response.json();
        console.log("Register successfull", data);
       setmessage(data.message);
        const timer = setTimeout(() => {
          setIsVisible(false);

        }, 3000);
        setIsVisible(true);

        return () => {
          clearTimeout(timer);
        };
      }
    }
    catch (error) {
      console.log("there was an error", error);
    }
  
  
    }

  return (
    <div>
  
      <section>
          
      
        <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/>
        {
          IsVisible ? <div className="alert alert-success" role="alert">{message}</div> : ""
        }

      
      </section>

      <section className='container workerlist'>
      
        <p className='yourcurrentassis'>Your Current Assistance</p>
        <button type="button"data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addassistance}>Add Asssistance</button>
        
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1"className="form-label">Email address</label>
  <input type="email"onChange={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<select onChange={categorybtn} className="form-select" aria-label="Default select example">
                        <option selected >Select The category</option>
                        {
                          category.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                          ))
                        }
</select>
<label className='assistance-level'>Level of Assistance:</label>
                      <select className="form-select" onChange={levelofassistance} aria-label="Default select example">
                        <option selected>Select Assist Level</option>
                        <option className="op" value="1">Beginner</option>
                        <option className="op" value="2">Moderate</option>
                        <option className="op" value="3">Pro</option>
                      </select>
<div className="mb-3">
  <label  htmlFor="exampleFormControlInput1" className="form-label">daily_bill</label>
  <input type="text"onChange={daily_bill} className="form-control" id="exampleFormControlInput1" placeholder="Enter your daily bill"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">yerar of experience in sector</label>
  <input type="text"onChange={experience} className="form-control" id="exampleFormControlInput1" placeholder="Enter your experience sector"/>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"onClick={save} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div className='current-assistance'>
        {
          Worker.map((item,index)=>(
            <label onClick={()=>assistance(item.category.name)} key={index}className='serviceslist'>
    
            <img className='services-logo'src={item.category.imagePath}/>
            <p className='services-name'>{item.category.name}</p> 
          </label>
          ))
        }
</div>
        <p className='yourcurrentassis'>Your Pending Assistance</p>
<div className='pending-assistance'>
        {
          pendingworker.map((item,index)=>(
            <label key={index}className='serviceslist'>
    
            <img className='services-logo'src={item.category.imagePath}/>
            <p className='services-name'>{item.category.name}</p> 
          </label>
          ))
        }
</div>

<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
        
        
      </section>
    </div>
  )
}
Worker.propTypes = {
  Isworker: PropTypes.bool,
  IsUser: PropTypes.bool,
  setIsUser:PropTypes.bool
};
export default Worker
