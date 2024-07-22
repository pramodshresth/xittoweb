import {useEffect, useState} from 'react'
import Slider1 from './assets/Slider1.jpg';

import Slider2 from './assets/Slider2.jpg';
import Slider3 from './assets/Slider3.jpg';
import Workflow from './assets/Workflow.png';
import { useNavigate} from "react-router-dom";
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import Top_shapes from './assets/Top_shapes.svg';
import EmergeInfoLogo from './assets/EmergeInfoLogo.png';
import Khalti from './assets/Khalti.png';
import ConnectIps from './assets/ConnectIps.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import {Autoplay, FreeMode,Pagination} from 'swiper/modules';
import './css/Service.css';
import 'swiper/css/pagination';
import Comma from './assets/comma.svg';
import Comma1 from './assets/comma1.svg';

import SiteVisitor from './assets/Sitevisitor.svg';

import xittofooterimage from './assets/xittoblueimage.png';

import Navbar from './nav/Navbar';
import {FetchCategoryData,token} from '../api/ApI.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';
import AOS from 'aos';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Service = ({Isworker,IsUser}) => {

  const navigate = useNavigate();
  const problem=(item)=>{
    navigate(`/viewproblem/${item}`,{state:item});
  
  }
  

  
  // const viewmap=()=>{
  //   navigate('/viewmap');
  // }







  const Slider=()=>{
    return(
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-inner">
   <div className="carousel-item active">
     <img src={Slider1}  className="firstpage d-block w-100" alt="..."/>
   </div>
   <div className="carousel-item">
     <img src={Slider2} className="secondpage d-block w-100" alt="..."/>
   </div>
   <div className="carousel-item">
     <img src={Slider3} className="thirdpage d-block w-100" alt="..."/>
   </div>
  
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span className="carousel-control-next-icon" aria-hidden="true"></span>
   <span className="visually-hidden">Next</span>
 </button>
</div>
    )
  }







 

  const Services=()=>{
    const[Data,setData]=useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(FetchCategoryData(), {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data.data, 'service data')
          return setData(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      AOS.init();
    }, []);

    
    return (
      <>
      <div>


 
<p className='bookservice 'data-aos="fade-up"><span className='our'>OUR</span><span className='service'>&nbsp;SERVICES</span></p>
<div  data-aos="zoom-in" className='services servicespadding'>

{
Data === undefined ?"": Data.map((item,index)=>(
   // eslint-disable-next-line react/jsx-key
   <label key={index}onClick={()=>problem(item.id)}className='serviceslist'>
   
     <img className='services-logo'src={item.imagePath}/>
     <p className='services-name'>{item.name}</p>
   </label>
  
 ))
}
</div>
</div>
      </>


    )
    
  }


  const OurPartner=()=>{
    return(
      <div  className='container'>
    <h1  className='ourpartner'><span className='our'>OUR &nbsp;</span> PARTNERS</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280:{
            slidesPerView:1,
            spaceBetween: 20,
            
          },
          447:{
            slidesPerView:2,
            spaceBetween: 20,

          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 140,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 150,
          },
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper"


      >
        <div className='partner-image'>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={Khalti} className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={ConnectIps} className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        <SwiperSlide><img src={EmergeInfoLogo}className='partner-logo'/></SwiperSlide>
        </div>
      </Swiper>
  </div>
    )
  }

  const Howwework=()=>{
    return (
      <img  src={Workflow}className='workflow'/>
    )
  }


  const Whatourclientsay=()=>{
    return (
      <div className='client-page'>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1290: {
            slidesPerView:2,
            spaceBetween: 10,
          },
          1400:{
            slidesPerView:3,
            spaceBetween: 10,
            
          }
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="partner-image"
        data-aos="flip-right"
        


      >
       
        

<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
        <div className="card   client-card">
  <div className="row card-body">
  {/* <div className='row'> */}
      <div className='client-image col-md-5'>
  <img src={Slider1} className="card-img-top " alt="..."/>
  
  </div>
  <div className='col-md-7 card-title'>
  <h5 className="">Card title</h5>
 
  </div>
  {/* </div> */}
  
    </div>
    <div className='row em-2'>
  <div className='col-md-2'>
  <img  src={Comma} className='comma-img img-fluid'/>
  </div>
  <div className=" col-md-8 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </div>
  <div className=' col-md-2 d-3 col-sm-2'><img className='comma-img  img-fluid' src={Comma1}/></div>
  </div>
</div>
</SwiperSlide>


      </Swiper>
</div>
    )
  }




  const Footer=()=>{
    return (
      <>
      <div className='foot'>
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
      </>
    )
  }





  return (
    <>
    
       
       <section>
       
        <div className='back-img-0'> 
       <div className=''>
   <Navbar Isworker={Isworker} IsUser={IsUser}/>
</div>






<section>



 <Slider/>
</section>


 <section id="services" className='services-section container'>

 <Services/>
</section>
</div> 
<section data-aos="zoom-in"  className='sectionpadding ourpartnersection'>
  <OurPartner/>
</section>

<section className='sectionpadding'>
  <Howwework/>
</section>

<section    className='what-our-client-say sectionpadding'>
<Whatourclientsay/>
</section>

<section data-aos="zoom-in" >
  <Footer/>
</section>
</section>
    </>
   
  )
}
Service.propTypes = {
  Isworker: PropTypes.bool,
  IsUser: PropTypes.bool
};
export default Service