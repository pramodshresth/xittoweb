// import { useState ,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import PublicRoutes from './router/PublicRoutes.jsx';
// import Logo from './assets/WhiteLogo.svg';
// import { fetchCategoryData,token} from "./api/ApI.jsx";
// import axios from "axios";
// import Firstimage from './assets/firstimage.png';
// import Secondimage from './assets/secondimage.png';
// import Thirdimage from './assets/thirdimage.png';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import NavLogo from './assets/navlogo.png';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';

import PublicRoutes from './router/PublicRoutes.jsx';
function App() {
  // const [Data, setData] = useState();
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(fetchCategoryData(), {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },

  //       });
  //       console.log("This is response",response);
  //       return setData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log("this is data",Data);


  return (
    <>
    <div>
    <PublicRoutes/>
    {/* <p>Hello world</p> */}
    </div>
    
     
    </>
  )
}

export default App
