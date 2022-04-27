import { Link } from 'react-router-dom';
import React from 'react';
// import NavBar from './Navbar';
import SomeInfo from './SomeInfo';
import Navbar1 from './Navbar1';


const Home = () => {
  return (
    <div className='main'>
    {/* <NavBar /> */}
    <Navbar1 />
    <SomeInfo />
    </div>
  )
}

export default Home