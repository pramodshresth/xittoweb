import React from 'react'
import Firstimage from './assets/firstimage.png';
import Secondimage from './assets/secondimage.png';
import Thirdimage from './assets/thirdimage.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavLogo from './assets/navlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate, useLocation } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Service = () => {
  const navigate = useNavigate();
  const problem=()=>{
    navigate("/serviceproblem");
  
  }
  const login=()=>{
    // navigate('/loginpage');
  }
  const register=()=>{
    // navigate('/register');
  }
  const logout=()=>{
    
  }
  return (
    <>
    
       
       <section>
       <div className='container-fluid'>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
 <div class="container">
 
   <img src={NavLogo} className='logo'/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
       <a class="nav-link" aria-current="page" href="#services">Services</a>
       <a class="nav-link" href="#assistance">Assistance</a>
       <a class="nav-link" href="#contact">Contact us</a>
      
       

       
     </div>
     
     <div>
     <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
     </form>
     </div>
     <div className='login'>
        
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <PermIdentityIcon/>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"onClick={login}>Login</a></li>
    <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal2" href="#"onClick={register}>Register</a></li>
    <li><a class="dropdown-item" href="#"onClick={logout}>Logout</a></li>

    {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>

{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        <h5 class="modal-title" id="exampleModalLabel">Please Login to XITTOO</h5>
      </div>
      <div class="modal-body login">
        <input type='text'className='login-user'placeholder='Phone Number'/>
        <input type='password'className='user-phonenumber'placeholder='Password'/>
        <p className='forgotpassword'>Forgot Password ?</p>
        <button type="button" class="btn login-save-btn btn-primary">Login</button>
        
        <p className='signuplink'>New member ? <span data-bs-toggle="modal" data-bs-target="#exampleModal2" className='signup'>Signup ..</span></p>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        <h5 class="modal-title" id="exampleModalLabel">Please Register to XITTOO</h5>

        
      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-md-6'>
        <input type='text'className='login-user'placeholder='Name'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='phone'/>
        </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
        <input type='password'className='login-user'placeholder='password'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='gender'/>
        </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
        <input type='text'className='login-user'placeholder='district'/>
        </div>
        
        <div className='col-md-6'>
        <input type='text'className=' user-phonenumber'placeholder='address'/>
        </div>
        </div>
        <div className='row'>
        <div class="mb-3">
  
  <input class="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
        </div>
      </div>
    
    </div>
  </div>
</div>
       </div>
    
     
     
   </div>
 </div>
</nav>
</div>






<section>



<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src={Firstimage} class="firstpage d-block w-100" alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={Secondimage} class="secondpage d-block w-100" alt="..."/>
   </div>
   <div class="carousel-item">
     <img src={Thirdimage} class="thirdpage d-block w-100" alt="..."/>
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


 <section id="services" className='services-section sectionpadding'>
<div>


 
 <p className='bookservice '>Our<span className='service'>&nbsp;Service</span></p>
 <div className='services'>
 <label>
 <img src={Firstimage}onClick={problem}className='services-logo'/>
 <p className='services-name'>Laptop</p>
 </label>



 


 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>Computer</p>
 </label>

 
 <label>
 <img className='services-logo' src={Secondimage}/>
 <p className='services-name'>Mobile</p>
 </label>
 <label>
 <img className='services-logo' src={Thirdimage}/>
 <p className='services-name'>Tab</p>
 </label>
 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>mouse</p>
 </label>
 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>Telephone</p>
 </label>
 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>fan</p>
 </label>
 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>cooler</p>
 </label>
 <label>
 <img className='services-logo' src={Firstimage}/>
 <p className='services-name'>Ethernet</p>
 </label>
 

 

 </div>
 
 

</div>
</section> 

<section className='sectionpadding'>
 <div className='container'>
 {/* why xitto  */}
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

   

   {/* what our client says */}
   
   
 </div>
</section>

<section className='sectionpadding client-section'>
   <div className='client container'>
     <h1 className='client-heading'>What Our <span className='highlite'>Clients</span> Say ?</h1>

     <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3000">
    <img src={Firstimage} className="client-photo d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
       <h5>First slide label</h5>
       <p>Small business owner</p>
    
     </div>
     <p className='client-reply'>
     <p className='quote'><FormatQuoteIcon/></p>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </p>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
    <img src={Secondimage} className="client-photo d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h5>Second slide label</h5>
       <p>Small business owner</p>
    
     </div>
     <p className='client-reply'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </p>
    </div>
    <div class="carousel-item"data-bs-interval="3000">
    <img src={Thirdimage} className="client-photo d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h5>Third slide label</h5>
       <p>Small business owner</p>
    
     </div>
     <p className='client-reply'>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



   </div>
   
   </section>

<section className='sectionpadding'>
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
   </section>

   {/* <section className='sectionpadding'> */}
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
             {/* <h1 style={{color:'#FFF'}}>Location</h1> */}
             {/* <div className='row' style={{color:"#FFF",listStyle:"none"}}>
               <ul style={{listStyle:"none"}}>
                
               </ul>
               </div> */}

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

       
      
         </section>
     </section>
     
   

     
     
    </>
   
  )
}

export default Service