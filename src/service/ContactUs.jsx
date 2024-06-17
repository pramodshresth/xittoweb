import React from 'react'
import NavLogo from './assets/navlogo.png';
import './css/ContactUs.css';
import Location from './assets/location.gif';
import Mail from './assets/mail.gif';
import Telephone from './assets/telephone.gif';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from './nav/Navbar';
const ContactUs = ({Isworker}) => {
  const navigate=useNavigate();
  const services=()=>{
    navigate('/#services');

  }
  return (
    <div>
        <section> 
        <div className='container-xxs'>
          <Navbar Isworker={Isworker}/>
        
        

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
            <p className='contactus-paragraph'>info@emergeinfosys.com</p>
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

    <div className='row'>
          <div className='col-md-6'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6536.7771255022!2d85.52008745923969!3d27.629425215099236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb092b18791a8b%3A0x63c163e96e450ebe!2sEmerge%20Infosys%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1713767604299!5m2!1sen!2snp" width={'100%'} height="450" style={{ border: '0' }} allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div className='col-md-6'>
            <form>
            <div className='row'>
            
              
            <div class="col-md-6 mb-3">
  <input type="text" class="form-control contact-form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
</div>
<div class="col-md-6 mb-3">
  <input type="text" class="form-control contact-form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
</div>
            </div>
            <div className='row'>
              <div className='col-md-12 mb-3'>
              <input type="text" class="form-control contact-form-control" id="exampleFormControlInput1" placeholder="Subject"/>

              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
              <textarea class="form-control contact-form-control contactus-text" id="exampleFormControlTextarea1" rows="10"placeholder='Message'></textarea>

              </div>
            </div>
            <div className='row warning-btn'>
            <button type="button" class="btn btn-warning mt-3">Send Message</button>
            </div>
            </form>
          </div>
        </div>
    </div>
</section>

<section className='sectionpadding know-more-about-us'>
  <div className='container'>
  <div className='row'>
    <div className='col-md-4'>
      <h1 className='contactus-heading'>XITTO</h1>
      <span>
        {/* <img src={FacebookIcon}/> */}
        <FacebookIcon className='facebook'/>
        <InstagramIcon className='instagram'/>
        <YouTubeIcon className='youtube'/>
        
      </span>

    </div>
    <div className='col-md-4'>
    <h1 className='contactus-heading'>Contact Us</h1>
    <p className='contactus-heading'>Chardobato,Banepa-7,kavre</p>
    <p className='contactus-heading'>011-663099</p>
    <p className='contactus-heading'>9801362962|64</p>
    <p className='contactus-heading'>info@emergevisuals.com.np</p>
    <div className='Booking-btn'>
            <button type="button" class="btn btn-warning mt-3">Book Now</button>
            </div>



    </div>
    <div className='col-md-4 ourservices'>
      <h1 className='contactus-heading'>Our Services</h1>
      <a className='btn-link 'href='https:facebook.com'> <PanoramaFishEyeIcon className='mx-3'/>create Booking</a>
       <a className='btn-link'href='https:facebook.com'><PanoramaFishEyeIcon  className='mx-3'/>register your problem</a>
      <a className='btn-link'href='https:facebook.com'> <PanoramaFishEyeIcon  className='mx-3'/>Become Assistance</a>
      <a className='btn-link'href='https:facebook.com'><PanoramaFishEyeIcon   className='mx-3'/>Contact our staff</a>
      
    </div>
  </div>
  </div>
</section>

<section>
  <div className='container-fluid footer'>
    <div className='row'>
  {/* <div className='col-md-4'> */}
  <span className='mb-0'>"&copy;"
  <a className='text-primary'href="#">Emerge Infosys</a>
    ". All Rights Reserved."

    <span className='design'>Designed by</span><span className='emerge-infosys'>Emerge Infosys</span>

  </span>

  {/* <div className='section-bg text-md-end'> */}
   
  {/* </div> */}
  

  {/* </div> */}
  {/* <div className='col-md-8'> */}
  
  {/* </div> */}
  </div>
    </div>
    {/* <div className='em-3 col-md-4'>
    <p className='mb-0'>"&copy;"
    <a className='text-primary'href="#">Emerge Infosys</a>
    ". All Rights Reserved."
    </p>

    </div> */}
    {/* <div className='col-md-8'>
    <div className='section-bg text-md-end'>
    <span className='design'>Designed by</span><span className='emerge-infosys'>Emerge Infosys</span>
  </div>

    </div> */}

 
  {/* <div className='row'>
  <p className='mb-0'>"&copy;"
  <a className='text-primary'href="#">Emerge Infosys</a>
  ". All Rights Reserved."
  </p>
  <div className='section-bg text-md-end'>
    <span className='design'>Designed by</span><span className='emerge-infosys'>Emerge Infosys</span>
  </div>
  </div> */}
</section>




            </div>
            </section>
           
    </div>
  )
}

export default ContactUs