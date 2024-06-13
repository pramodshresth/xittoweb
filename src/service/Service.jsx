import React,{useEffect, useState} from 'react'
import Slider1 from './assets/Slider1.jpg';

import Slider2 from './assets/Slider2.jpg';
import Slider3 from './assets/Slider3.jpg';
import Workflow from './assets/Workflow.png';
import { useNavigate, useLocation } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
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
import FooterImage from './assets/FooterImage.png';
import SiteVisitor from './assets/Sitevisitor.svg';
import HappyClients from './assets/HappyClients.svg';
import Support from './assets/Support.svg';
import xittofooterimage from './assets/xittoblueimage.png';
import Cart from './assets/Cart.svg';
import Notification from './assets/Notification_icon.svg';
import Xshape from './assets/Xshape.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Navbar from './nav/Navbar';
import {FetchCategoryData,token} from '../api/ApI.jsx';
import axios from 'axios';
const Service = () => {
  
  const navigate = useNavigate();
  const problem=(item)=>{
    // console.log("this is item",item);
    navigate("/serviceproblem",{state:item});
  
  }
  const login=()=>{
    // navigate('/loginpage');
  }
  const register=()=>{
    navigate('/register');
  }
  const logout=()=>{
    
  }
  const contactus=()=>{
    navigate("/contactus");
  }
  const[Data,setData]=useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FetchCategoryData(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("this is data",Data);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    
       
       <section>
       
        <div className='back-img-0'> 
       <div className=''>
   <Navbar/>
</div>






<section>



<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src={Slider1} class="firstpage d-block w-100" alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={Slider2} class="secondpage d-block w-100" alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={Slider3} class="thirdpage d-block w-100" alt="..."/>
   </div>
  
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</section>


 <section id="services" className='services-section container'>
<div>


 
 <p className='bookservice 'data-aos="fade-up"><span className='our'>OUR</span><span className='service'>&nbsp;SERVICES</span></p>
 <div data-aos="zoom-in" className='services servicespadding'>
 {/* <label className="serviceslist">
 <img src={OfficeRenovation}onClick={problem}className='services-logo'/>
 <p className='services-name'>Office Renovation</p>
 </label> */}

{
 Data === undefined ?"": Data.map((item,index)=>(
    <label key={index}onClick={()=>problem(item.id)}className='serviceslist'>
      <img className='services-logo'src={item.imagePath}/>
      <p className='services-name'>{item.name}</p>
    </label>
  ))
}
 </div>
</div>
</section>
</div> 
<section data-aos="zoom-in" className='sectionpadding ourpartnersection'>
  <div className='container'>
    <h1 className='ourpartner'><span className='our'>OUR &nbsp;</span> PARTNERS</h1>
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
</section>

<section className='sectionpadding'>
  <img  src={Workflow}className='workflow'/>
</section>

<section    className='what-our-client-say sectionpadding'>

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
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>


<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>

<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>


<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem </p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>
<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>


<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>


<SwiperSlide>
        <div class="card  client-card">
  <div class="row card-body">
  <div className='row'>
      <div className='client-image col-md-5'>
  <img src={Slider1} class="card-img-top" alt="..."/>
  
  </div>
  <div className='col-md-5 card-title'>
  <h5 class="">Card title</h5>
 
  </div>
  </div>
  <div className='row em-2'>
  <div className='col-md-2 comma'>
  <img  src={Comma} className='comma-img'/>
  </div>
  <p class=" col-md-8 p-0 card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div className=' col-md-2 comma1'><img className='comma1' src={Comma1}/></div>
  </div>
    </div>
</div>
</SwiperSlide>
      </Swiper>
</div>
<div className='client-page'>
      </div>
</section>

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

</section>
</section>
     
   

     
     
    </>
   
  )
}

export default Service