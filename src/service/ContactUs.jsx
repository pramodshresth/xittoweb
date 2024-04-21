import React from 'react'
import NavLogo from './assets/navlogo.png';
import './css/ContactUs.css';
import Location from './assets/location.gif';
import Mail from './assets/mail.gif';
import Telephone from './assets/telephone.gif';
const ContactUs = () => {
  return (
    <div>
        <section> 
        <div className='container-xxs'>
        
        <nav class="navbar  navbar-expand-lg bg-body-tertiary">
 <div class="container">
 
   <img src={NavLogo} className='logo'/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div class="navbar-nav mx-auto">
       <a class="nav-link" aria-current="page" href="#">Services</a>
       <a class="nav-link" href="#">Assistance</a>
       <a class="nav-link" href="#">Contact us</a>
       

       
     </div>
     <div>
     <form class="d-flex" role="search">
       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
     </div>
    
     
     
   </div>
 </div>
</nav>

{/* this is image section contact-us image */}
<section className='contact-us-image'>

</section>

<section className='contact-details'>
    <div className='container'>
    <div className='row'>
        
        <div className='col-md-4 pt-lg-5'>
            <div className='contactpage-location'>
            <img src={Location}/>
            <h1 className='contactus-heading'>Location</h1>
            <h4 className='contactus-paragraph'>Chardobato,Banepa-7,kavre</h4>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='contactpage-mail'>
                <img src={Mail}className='contactus-mail-gif'/>
            <h1 className='contactus-heading'>Mail</h1>
            <p className='contactus-paragraph'>info@emergeinfosys.com.np</p>
            </div>

        </div>

        <div  className='col-md-4 pt-lg-5 '>
            <div className='contactpage-contactNo'>
                <img src={Telephone}/>
            <h1 className='contactus-heading'>Contact No.</h1>
            <p className='contactus-paragraph'>011 663099</p>
            <p className='contactus-paragraph'>9801362962|64</p>
            </div>
        </div>

        <h1 className='contact-us'>CONTACT US</h1>
        <h1 className='contact-us'>If You Have Any Query, Please Contact Us</h1>
        
    </div>
    </div>
</section>




            </div>
            </section>
           
    </div>
  )
}

export default ContactUs