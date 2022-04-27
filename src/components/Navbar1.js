import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar1 = () => {
  return (
    <div >
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className='fas far-bars'><FontAwesomeIcon icon={faBars} /></i>
            </label>
            <label className="logo">KukuPay</label>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a className="active" href="/about">About</a></li>
                <li><a className="active" href="/info">Services</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar1