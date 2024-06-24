import React, { useEffect, useState } from 'react';
import Navbar from './nav/Navbar'
import './css/Registerprofessional.css';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Image from './assets/Image.svg';
import SiteVisitor from './assets/Sitevisitor.svg';
import xittofooterimage from './assets/xittoblueimage.png';
import { FetchCategoryData, token, RegisterProfessional ,fetchworker} from '../api/ApI';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
const RegistertoProfessional = ({Isworker,IsUser}) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FetchCategoryData(), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        return setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [selectedcategory, setselectedcategory] = useState();
  const [workermail, setworkermail] = useState();
  const [workerdailybill, setworkerdailybill] = useState();
  const [workerexperience, setworkerexperience] = useState();
  const [workerlevelofassistance, setworkerlevelofassistance] = useState();
  const category = (e) => {
    const x = e.target.value;
    // console.log("this is data",Data);
    // console.log("this is id",x);
    setselectedcategory(x);
  }

  const mail = (e) => {
    const x = e.target.value;
    console.log("this is x", x);
    setworkermail(x);
  }
  const dailybill = (e) => {
    const x = e.target.value;
    setworkerdailybill(x);
    console.log("this is dailybill", x);
  }
  const experience = (e) => {
    const x = e.target.value;
    setworkerexperience(x);
    console.log("this is yearofexperience", x);
  }
  const levelofassistance = (e) => {
    const x = e.target.value;
    setworkerlevelofassistance(x);
    console.log("this is level of experience", x);
  }
  const [IsVisible, setIsVisible] = useState();
  const [Message, SetMessage] = useState();
  const register = async (e) => {
    e.preventDefault();
    const data = {
      mail: workermail,
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
        SetMessage(data.message);
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
        SetMessage(data.message);
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
  console.log("this is message",Message);
  if(Message==='Unauthorized'&&IsVisible===false)
    {
      navigate('/login');
    }

 
  
  
  return (
    <div>
      <section>
        {
          IsVisible ? <div className="alert alert-success" role="alert">{Message}</div> : ""
        }

        <div className='back-img-0'>
          <div className=''>
            <Navbar  Isworker={Isworker} IsUser={IsUser} className="ad" />
          </div>
          {!Isworker? <section>
            <form onSubmit={register}>
              <div className='reg-dd'>
                <div className='registertoprofessional'>

                  <div className='row'>
                    <div className='col-md-4 register-form'>
                      <h4 className='registerprofessional'>REGISTER HERE FOR PROFESSINAL!</h4>:<h4 className='registerprofessional'>Switch To PROFESSINAL!</h4>
                      {/* <label className='register-d'>Full Name:</label>
        <div className="input-group mb-3">
        
          
  <input type="text" className=" form-xx form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
  < PersonIcon className='icon'/>
</div> */}


                      {/* <label className='register-d'>Address:</label> */}
                      {/* <div className="input-group mb-3">
        
          
  <input type="text" className=" form-xx form-control" placeholder="Full Address" aria-label="Username" aria-describedby="basic-addon1"/>
  <RoomIcon className='icon'/>
</div> */}


                      {/* <label className='register-d'>Service:</label>
        <div className="input-group mb-3">
        
          
  <input type="text" className=" form-xx form-control" placeholder="Select Service you Assist" aria-label="Username" aria-describedby="basic-addon1"/>
  <SearchIcon className='icon'/>
</div> */}
                      <select onChange={category} className="form-select" aria-label="Default select example">
                        {/* <option selected className='ques'>Select The category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option> */}
                        <option selected >Select The category</option>
                        {
                          // Data.map((item,index)=>{
                          //   // <option>{item.name}</option>
                          // })
                          Data.map((item, index) => (
                            <option value={item.id}>{item.name}</option>
                          ))
                        }
                      </select>


                      <label className='register-d'>Year of Experience in sector:</label>
                      <div className="input-group mb-3">


                        <input type="text" onChange={experience} className="form-xx form-control" placeholder="4" aria-label="Username" aria-describedby="basic-addon1" />
                        {/* <SearchIcon/> */}
                        <span className='yrs'>yrs</span>
                      </div>

                      <label className='register-d'>Mail:</label>
                      <div className="input-group mb-3">


                        <input type="email" onChange={mail} className=" form-xx form-control" placeholder="Provide Mail Address" aria-label="Username" aria-describedby="basic-addon1" />
                        <LocalPostOfficeIcon className='icon' />
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="hello world" id="flexCheckChecked" checked />
                        <label className="form-check-label" for="flexCheckChecked">
                          I agree to all Terms & Conditions
                        </label>
                      </div>



                    </div>


                    <div className='col-md-4 reg-443 register-form'>



                      <label className='register-d'>Daily Bill:</label>
                      <div className="input-group mb-3">


                        <input type="text" onChange={dailybill} className=" form-xx form-control" placeholder="Your Number" aria-label="Username" aria-describedby="basic-addon1" />
                        <PhoneIphoneIcon className='icon' />
                      </div>

                      <label className='register-d'>Level of Assistance:</label>
                      <select className="form-select" onChange={levelofassistance} aria-label="Default select example">
                        <option selected>Select Assist Level</option>
                        <option className="op" value="1">Beginner</option>
                        <option className="op" value="2">Moderate</option>
                        <option className="op" value="3">Pro</option>
                      </select>

                      <button type="submit" className="btn btn-light">Register</button>

                    </div>


                    <div className='col-md-4 reg-443'>
                      <img src={Image} className='image' />
                    </div>
                  </div>

                </div>

              </div>
            </form>
          </section>
          :""}





        </div>

        <section data-aos="zoom-in" className='padding'>
          <div className='foot'>
            <div className='footter'>
              <div className='row footter-row'>
                <div className='col-md-6'>

                </div>

                <div className='col-md-6 profile-em'>
                  <div className='ourprofile'>
                    <div className='row'>
                      <div className='col-md-4 profile-section'>
                        <img src={SiteVisitor} className='ourprofile-image' />
                        <h3 className='ourprofile-img'>VISITORS</h3>
                        <h1 className='ourprofile-num'>555</h1>
                      </div>

                      <div className='col-md-4 profile-section'>
                        <img src={SiteVisitor} className='ourprofile-image' />
                        <h3 className='ourprofile-img'>HAPPY CLIENTS</h3>
                        <h1 className='ourprofile-num'>555</h1>
                      </div>

                      <div className='col-md-4 profile-section'>
                        <img src={SiteVisitor} className='ourprofile-image' />
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
                  <img src={xittofooterimage} className='footterimg' />

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
      </section>
    </div>
  )
}

export default RegistertoProfessional