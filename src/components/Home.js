import { Link } from 'react-router-dom';
import React from 'react';
// import NavBar from './Navbar';
 import SomeInfo from './SomeInfo';
import Navbar1 from './Navbar1';
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <div className='main'>
      <Navbar1 /> 
     <SomeInfo /> 
     <Footer />
    </div>
    {/* <div className="main2">

    </div>
    <div className="footer">
    </div> */}
    </>
  )
}

export default Home