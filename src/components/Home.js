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
    {/* <NavBar /> */}
    <Navbar1 />
    </div>
    <div className="main2">

    <SomeInfo />
    </div>
    <div className="footer">
    <Footer />
    </div>
    </>
  )
}

export default Home