import {useEffect,useState} from 'react'
import {token,Pending ,UpdateStatus,Ongoing, Completed} from '../../api/ApI';
import Navbar from '../nav/Navbar';
import axios from 'axios';
import './Home.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate,useLocation,useParams} from 'react-router-dom';
// import Onwork from './Onwork';
import PropTypes from 'prop-types';

const Home = ({Isworker,IsUser,setIsUser}) => {
  const{category}=useParams();
  const navigate=useNavigate();
  const {state}=useLocation();
  console.log("this is state",state);
  useEffect(()=>{
    setIsUser(false);
},[setIsUser])
    const[pending,setpending]=useState()
    useEffect(()=>{
      const fetchdata=async()=>{
          try {
              const response = await axios.get(
                Pending(),
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                  },
                }
              );
              console.log('this is response', response.data);
              setpending(response.data.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }

      }
      fetchdata()
  },[])
  const[completed,setcompleted]=useState();
  useEffect(()=>{
    const fetchdata=async()=>{
        try {
            const response = await axios.get(
              Completed(),
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
              }
            );
            console.log('this is response', response.data);
            setcompleted(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }

    }
    fetchdata()
},[])

  const[onwork,setonwork]=useState();
  useEffect(()=>{
    const fetchdata=async()=>{
        try {
            const response = await axios.get(
              Ongoing(),
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
              }
            );
            console.log('this is response', response.data);
            setonwork(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }

    }
    fetchdata()
},[])

  const[workerstatus,setworkerstatus]=useState();
  const[message,setmessage]=useState();
  const[IsVisible,setIsVisible]=useState();
  const levelofstatus=(e)=>{
    setworkerstatus(e.target.value)
}
const save=async(item)=>{
  const data={
      status:workerstatus,
  }
  console.log("this is item",item);
  console.log("this is category",item.id)
  try {
      const response = await fetch(`${UpdateStatus()}/${item.id}`, {
        method: 'PATCH',
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
const show=(item)=>{
  navigate('/show',{state:item})
}

console.log("this is pending",pending)
const pendingaccordingtocategory=pending===undefined?"":pending.filter((item)=>{return JSON.parse(item.bookedProblem).categoryName===category})
const onworkaccordingtocategory=onwork===undefined?"":onwork.filter((item)=>{return JSON.parse(item.bookedProblem).categoryName===category})
const completedaccordingtocategory=completed===undefined?"":completed.filter((item)=>{return JSON.parse(item.bookedProblem).categoryName===category})

console.log("this is pendingaccordingtocategory",pendingaccordingtocategory)
// const[hell,sethell]=useState()
// useEffect(()=>{
//   sethell(pendingaccordingtocategory)
// },[])
// const map=pending===undefined?"":pendingaccordingtocategory.map((item,index)=>{return item.id})
// console.log("this is map",map)
  return (
    <div>
       <Navbar setIsUser={setIsUser} Isworker={Isworker} IsUser={IsUser}/>
       {
          IsVisible ? <div className="alert alert-success" role="alert">{message}</div> : ""
        }
        <div className='container'>
        <ul className="status d-flex justify-content-center nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" style={{color:"#000000"}} aria-selected="true">pending</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="appoint-tab" data-bs-toggle="tab" data-bs-target="#appoint" type="button" role="tab" aria-controls="appoint"style={{color:"#000000"}} aria-selected="false">appoint</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="ongoing-tab" data-bs-toggle="tab" data-bs-target="#ongoing" type="button" role="tab" aria-controls="ongoing"style={{color:"#000000"}} aria-selected="false">ongoing</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab" aria-controls="completed"style={{color:"#000000"}} aria-selected="false">completed</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="pending" role="tabpanel" aria-labelledby="pending-tab">
 
 
  {
          
          pending===undefined?"":pendingaccordingtocategory.map((item,index)=>(
              <>
              <div key={index} className='row'>
               <div className='col-md-12'>
              <div className='onworkpage '>
          
          <div className='row'>
          <div className=' col-md-2  worker-problem-image-section'>
              <img  className=" worker-problem-image img-fluid"src={JSON.parse(item.bookedProblem).imagePath}alt='problemimage'/>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6  col-md-5 worker-problem-description-section'>
              <div className='worker-problem-description'>
              <h4>Full Name:{JSON.parse(item.bookedProblem).categoryName}</h4>
              <h4>Order Date:{item.bookedDate}Time:{item.bookedDate}</h4>
              </div>
          </div>

          <div data-bs-toggle="modal" data-bs-target="#exampleModal"className='col-md-3  worker-problem-status-section d-flex justify-content-end  align-items-center'>
              <div className={`worker-problem-status col-6 ${item.status==='pending'?'col-md-10 h-50  text-center pending d-flex  justify-content-center  align-items-center rounded':""}`}>
  {item.status}
              </div>
          </div>
  
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <label className='assistance-level'>Update status:</label>
                        <select className="form-select" onChange={levelofstatus} aria-label="Default select example">
                          <option selected>Select Assist Level</option>
                          <option className="op" value="ongoing">ongoing</option>
                          <option className="op" value="pending">pending</option>
                          <option className="op" value="appoint">appoint</option>
                          <option className="op" value="completed">completed</option>
                        </select>
  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button"onClick={()=>save(item)} className="btn btn-primary">Save changes</button>
        </div>
      </div>
      </div>
      </div>
  
  
          <div onClick={()=>show(item)} className=" col-xxl-1 col-xl-1 col-lg-1 col-md-2  d-flex align-items-center justify-content-end pr-1 worker-show-status-section">
      <div className="col-md-12 col-sm-2 col-3 d-flex h-50 align-items-center justify-content-center  worker-show-status  rounded "> 
          <VisibilityIcon/>
    </div>
  </div>
          </div>
  
         </div>
         </div>
         </div>
      
              </>
     
          ))   
         
      }
  </div>
  <div className="tab-pane fade" id="appoint" role="tabpanel" aria-labelledby="appoint-tab"></div>
  <div className="tab-pane fade" id="ongoing" role="tabpanel" aria-labelledby="onwork-tab">
  {
          
          onwork===undefined?"":onworkaccordingtocategory.map((item,index)=>(
              <>
              <div key={index} className='row'>
               <div className='col-md-12'>
              <div className='onworkpage '>
              <div className='row'>
          <div className=' col-md-2  worker-problem-image-section'>
              <img  className=" worker-problem-image img-fluid"src={JSON.parse(item.bookedProblem).imagePath}alt='problemimage'/>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6  col-md-5 worker-problem-description-section'>
              <div className='worker-problem-description'>
              <h4>Full Name:{JSON.parse(item.bookedProblem).categoryName}</h4>
              <h4>Order Date:{item.bookedDate}Time:{item.bookedDate}</h4>
              </div>
          </div>

          <div data-bs-toggle="modal" data-bs-target="#ongoingModal"className='col-md-3  worker-problem-status-section d-flex justify-content-end  align-items-center'>
              <div className={`worker-problem-status col-6 ${item.status==='ongoing'?'col-md-10 h-50  text-center pending d-flex  justify-content-center  align-items-center rounded':""}`}>
  {item.status}
              </div>
          </div>
  
          <div className="modal fade" id="ongoingModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <label className='assistance-level'>Update status:</label>
                        <select className="form-select" onChange={levelofstatus} aria-label="Default select example">
                          <option selected>Select Assist Level</option>
                          <option className="op" value="ongoing">ongoing</option>
                          <option className="op" value="pending">pending</option>
                          <option className="op" value="appoint">appoint</option>
                          <option className="op" value="completed">completed</option>
                        </select>
  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button"onClick={()=>save(item)} className="btn btn-primary">Save changes</button>
        </div>
      </div>
      </div>
      </div>
  
  
          <div onClick={()=>show(item)} className=" col-xxl-1 col-xl-1 col-lg-1 col-md-2  d-flex align-items-center justify-content-end pr-1 worker-show-status-section">
      <div className="col-md-12 col-sm-2 col-3 d-flex h-50 align-items-center justify-content-center  worker-show-status  rounded "> 
          <VisibilityIcon/>
    </div>
  </div>
          </div>
              
          
  
         </div>
         </div>
         </div>
      
              </>
     
          ))   
         
      }
  </div>
  <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
  {
          
          completed===undefined?"":completedaccordingtocategory.map((item,index)=>(
              <>
              <div key={index} className='row'>
               <div className='col-md-12'>
              <div className='onworkpage '>
              <div className='row'>
          <div className=' col-md-2  worker-problem-image-section'>
              <img  className=" worker-problem-image img-fluid"src={JSON.parse(item.bookedProblem).imagePath}alt='problemimage'/>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6  col-md-5 worker-problem-description-section'>
              <div className='worker-problem-description'>
              <h4>Full Name:{JSON.parse(item.bookedProblem).categoryName}</h4>
              <h4>Order Date:{item.bookedDate}Time:{item.bookedDate}</h4>
              </div>
          </div>

          <div data-bs-toggle="modal" data-bs-target="#completedModel"className='col-md-3  worker-problem-status-section d-flex justify-content-end  align-items-center'>
              <div className={`worker-problem-status col-6 ${item.status==='completed'?'col-md-10 h-50  text-center pending d-flex  justify-content-center  align-items-center rounded':""}`}>
  {item.status}
              </div>
          </div>
  
          <div className="modal fade" id="completedModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <label className='assistance-level'>Update status:</label>
                        <select className="form-select" onChange={levelofstatus} aria-label="Default select example">
                          <option selected>Select Assist Level</option>
                          <option className="op" value="ongoing">ongoing</option>
                          <option className="op" value="pending">pending</option>
                          <option className="op" value="appoint">appoint</option>
                          <option className="op" value="completed">completed</option>
                        </select>
  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button"onClick={()=>save(item)} className="btn btn-primary">Save changes</button>
        </div>
      </div>
      </div>
      </div>
  
  
          <div onClick={()=>show(item)} className=" col-xxl-1 col-xl-1 col-lg-1 col-md-2  d-flex align-items-center justify-content-end pr-1 worker-show-status-section">
      <div className="col-md-12 col-sm-2 col-3 d-flex h-50 align-items-center justify-content-center  worker-show-status  rounded "> 
          <VisibilityIcon/>
    </div>
  </div>
          </div>
          
          {/* <div className='row'>
          <div className=' col-xl-1 col-lg-2 col-md-2 col-sm-2 worker-problem-image-section'>
              <img  className=" worker-problem-image img-fluid"src={JSON.parse(item.bookedProblem).imagePath}alt='problemimage'/>
          </div>
          <div className='col-md-4 col-lg-4 worker-problem-description-section'>
              <div className='worker-problem-description'>
              <h4>Full Name:{JSON.parse(item.bookedProblem).categoryName}</h4>
              <h4>Order Date:{item.bookedDate}Time:{item.bookedDate}</h4>
              </div>
          </div>

          <div data-bs-toggle="modal" data-bs-target="#completedModel"className='col-md-3 worker-problem-status-section d-flex justify-content-end  align-items-center'>
              <div className={`worker-problem-status col-6 ${item.status==='ongoing'?'col-md-5 col-sm-6 h-50  text-center ongoing d-flex  justify-content-center  align-items-center rounded':item.status==='pending'?'col-md-5 col-sm-6 h-50  text-center pending d-flex  justify-content-center  align-items-center rounded':item.status==='onwork'?'onwork':item.status==='completed'?'completed':''}`}>
  {item.status}
              </div>
          </div>
         
  
          <div className="modal fade" id="completedModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <label className='assistance-level'>Update status:</label>
                        <select className="form-select" onChange={levelofstatus} aria-label="Default select example">
                          <option selected>Select Assist Level</option>
                          <option className="op" value="ongoing">ongoing</option>
                          <option className="op" value="pending">pending</option>
                          <option className="op" value="appoint">appoint</option>
                          <option className="op" value="completed">completed</option>
                        </select>
  
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button"onClick={()=>save(item)} className="btn btn-primary">Save changes</button>
        </div>
      </div>
      </div>
      </div>
  
  
          <div onClick={()=>show(item)} className="col-md-1 d-flex align-items-center justify-content-end pr-1 worker-show-status-section">
      <div className="col-2 col-sm-1 col-md-12 col-xxl-6 col-xl-10 col-lg-12 d-flex h-50 align-items-center justify-content-center  worker-show-status  rounded "> 
          <VisibilityIcon/>
    </div>
  </div>
          </div> */}
  
         </div>
         </div>
         </div>
      
              </>
     
          ))   
         
      }
  </div>
</div>
</div>
    </div>
  )
}
Home.propTypes = {
  Isworker: PropTypes.bool,
  IsUser: PropTypes.bool,
  setIsUser:PropTypes.bool
};
export default Home