import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar1 = () => {
  return (
    <div className='nav-wrapper' >
        <nav>
            <label className="logo py-3"><h1>KukuPay</h1></label>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className='far-bars'><FontAwesomeIcon icon={faBars} /></i>
            </label>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a className="active" href="/about">About Us</a></li>
                <li><a className="active" href="/info">Services</a></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar1