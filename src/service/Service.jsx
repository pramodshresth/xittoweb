import React,{useEffect} from 'react'
import Slider1 from './assets/Slider1.jpg';
import OfficeRenovation from './assets/Renovation.svg';
import Electrician from './assets/Electrician.svg';
import Inverter from './assets/Inverter.svg';
import AirConditioner from './assets/Ac.svg';
import Desktop from './assets/Desktop.svg';
import Laptop from './assets/Laptop.svg';
import Printer from './assets/printer.svg';
import Networking from './assets/Networking.svg';
import Slider2 from './assets/Slider2.jpg';
import Slider3 from './assets/Slider3.jpg';
import CCcamera from './assets/CC_Camera.svg';
import Intercom from './assets/Intercom.svg';
import Thumb from './assets/Thumb.svg';
import NoteCounting from './assets/Note_Counting.svg';
import Serverack from './assets/Server_Rack.svg';
import FireExtinguisher from './assets/Fire_Extinguisher.svg';
import DoorLock from './assets/Door_Lock.svg';
import Projector from './assets/Projector.svg';
import Fridge from './assets/Fridge.svg';
import Micro_Oven from './assets/Micro_Oven.svg';
import Workflow from './assets/Workflow.png';

import WashingMachine from './assets/Washing_machine.svg';
import Generator from './assets/Generator.svg';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavLogo from './assets/navlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
const Service = () => {
  const navigate = useNavigate();
  const problem=()=>{
    navigate("/serviceproblem");
  
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
 <label className="serviceslist">
 <img src={OfficeRenovation}onClick={problem}className='services-logo'/>
 <p className='services-name'>Office Renovation</p>
 </label>



 


 <label className="serviceslist">
 <img className='services-logo' src={Electrician}/>
 <p className='services-name'>Electrician</p>
 </label>

 
 <label className="serviceslist">
 <img className='services-logo' src={Inverter}/>
 <p className='services-name'>Inverter and Battery</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={AirConditioner}/>
 <p className='services-name'>Air Conditioner</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Desktop}/>
 <p className='services-name'>Desktop Computer</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Laptop}/>
 <p className='services-name'>Laptop</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Printer}/>
 <p className='services-name'>Printer</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Networking}/>
 <p className='services-name'>Networking</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={CCcamera}/>
 <p className='services-name'>CCTV Camera</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Intercom}/>
 <p className='services-name'>Intercom</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Thumb}/>
 <p className='services-name'>Thumn Attendance</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={DoorLock}/>
 <p className='services-name'>Door Lock System</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={NoteCounting}/>
 <p className='services-name'>Note Counting Machine</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Serverack}/>
 <p className='services-name'>Server Rock</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={FireExtinguisher}/>
 <p className='services-name'>Fire Extinguisher</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Projector}/>
 <p className='services-name'>Projector</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Fridge}/>
 <p className='services-name'>Refrigerator</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Micro_Oven}/>
 <p className='services-name'>Microwave Oven</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={WashingMachine}/>
 <p className='services-name'>Washing Machine</p>
 </label>
 <label className="serviceslist">
 <img className='services-logo' src={Generator}/>
 <p className='services-name'>Generator</p>
 </label>
 

 

 </div>
 
 

</div>
</section>
</div> 
{/* </div> */}

{/* <section className='sectionpadding '>
 <div className='container'>

     <h1 className='whyxitto' >Why <span className='service'>Xittoo ?</span></h1>
     <div className='row whyxitto-description'>
      <div className='col-md-6'>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
 <div class="row g-0">
   <div class="col-md-4">
     <img src={Firstimage} class="whyxitto-image img-fluid rounded-start" alt="..."/>
   </div>
   <div class="col-md-8 description">
     <div class="card-body">
       <h5 class="card-title">Transparent Pricing</h5>
       <p class="card-text">See fixed prices and get prior estimates.</p>
     </div>
   </div>
 </div>
</div>

<div class="card mb-3" style={{maxWidth: "540px"}}>
 <div class="row g-0">
   <div class="col-md-4">
     <img src={Firstimage} class="whyxitto-image img-fluid rounded-start" alt="..."/>
   </div>
   <div class="col-md-8 description">
     <div class="card-body">
       <h5 class="card-title">Transparent Pricing</h5>
       <p class="card-text">See fixed prices and get prior estimates.</p>
     </div>
   </div>
 </div>
</div>


<div class="card mb-3" style={{maxWidth: "540px"}}>
 <div class="row g-0">
   <div class="col-md-4">
     <img src={Firstimage} class="whyxitto-image img-fluid rounded-start" alt="..."/>
   </div>
   <div class="col-md-8 description">
     <div class="card-body">
       <h5 class="card-title">Transparent Pricing</h5>
       <p class="card-text">See fixed prices and get prior estimates.</p>
     </div>
   </div>
 </div>
</div>

<div class="card mb-3" style={{maxWidth: "540px"}}>
 <div class="row g-0">
   <div class="col-md-4">
     <img src={Firstimage} class="whyxitto-image img-fluid rounded-start" alt="..."/>
   </div>
   <div class="col-md-8 description">
     <div class="card-body">
       <h5 class="card-title">Transparent Pricing</h5>
       <p class="card-text">See fixed prices and get prior estimates.</p>
     </div>
   </div>
 </div>
</div>

     </div>
     <div className='col-md-6 description-image'>
     <img src={Firstimage} className='img'/>

     </div>

     

   </div>

   

   
   
 </div>
</section> */}
<section data-aos="zoom-in" className='sectionpadding ourpartnersection'>
  {/* <div className=''> */}
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

  
  {/* <img src={FooterImage}className=' footter-image'/> */}
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

{/* <section className='sectionpadding'>
     <div className='container'>
       <div className='container'>
         <div className='row justify-content-center text-center'>
           <div className='col-md-3 col-sm-12 result'>
             <h2 className='result-data'>500000+</h2>
             <p className='result-header'>Bookings</p>
           </div>

           <div className='col-md-3 col-sm-12 result'>
             <h2 className='result-data'>500000+</h2>
             <p className='result-header'>Happy Customer</p>
           </div>

           <div className='col-md-3 col-sm-12 result'>
             <h2 className='result-data'>300+</h2>
             <p className='result-header'>Verified Experts</p>
           </div>

           <div className='col-md-3 col-sm-12'>
             <h2 className='result-data'>50+</h2>
             <p className='result-header'>Services</p>
           </div>
         </div>
         
       </div>
     </div>
   </section> */}

{/* 
     <section  className='sectionpadding container-fluid footer-container'>
       <div className='container'>
         <div className='row'>
           <div className='col-md-3'>
         
             <h1 style={{color:"#FFF"}}>Xitto</h1>
             <div className='col-md-12' style={{color:"#FFF",listStyle:"none"}}>
               <a href='https://www.facebook.com'><FacebookIcon className='facebookicon'/></a>
               <a href='https://www.twitter.com'><TwitterIcon className='twittericon'/></a>
               <a href='https://www.youtube.com'><YouTubeIcon className='youtubeicon'/></a>
               <a href='https://www.linkedin.com'><LinkedInIcon className='linkedinicon'/></a>
               <a href='https://www.Instagram.com'><InstagramIcon className='instagramicon'/></a>



               
             </div>
           </div>
           <div className='col-md-3'>
             <h1 style={{color:'#FFF'}}>Services</h1>
             <div className='row' style={{color:"#FFF",listStyle:"none"}}>
             <ul style={{listStyle:"none"}}>
               <li>Booking</li>
               <li>Add Services</li>
               <li>Add problem</li>
               <li>Add question</li>
               <li>help </li>
               <li>Become Assistace</li>
               <li>Esewa</li>
               </ul>
               </div>
           </div>
           <div className='col-md-3'>
             

               <h1 style={{color:'#FFF'}}>Contact Us</h1>
               <div className='row' style={{color:"#FFF"}}>
             <ul style={{listStyle:"none"}}>
               
               <li>+977-9823576196</li>

               <li>Email Address</li>
               <li>Emerge infosys.com</li>
               <li>Kathmandu</li>
               <li>Banepa</li>


             </ul>
             </div>
             </div>

             <div className='col-md-3'>
               <h1 className='news-letter'>News letter</h1>
               <input type="text"className='send-email'placeholder='send email here'/><input type="button"className="subscribe" value="subscribe"/>
           

           </div>

           </div>
           
         </div>

       
      
         </section> */}
     </section>
     
   

     
     
    </>
   
  )
}

export default Service