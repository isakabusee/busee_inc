import React from 'react'
import author from '../images/IMG_8569.png';
import Moze from '../images/Moses.png';
import Kaka from '../images/kaka.png';
import Dada from '../images/dada.png';
import Kadadaa from '../images/Kadadaa.png';
import Bwire from '../images/Bwire.png';
import Moze1 from '../images/Moze1.png';
import Bwire3 from  '../images/Bwire3.png';
import Kadada3 from '../images/Kadada3.png';
import Atu3 from '../images/Atu3.png';
import kaka5 from '../images/kaka5.png';

import Navbar from './Navbar';



const AboutUs = () => {
  return (
      <>
      <div>
          <Navbar />
      </div>
    <div className="container py-5">
        <h1 className='about-heading py-5'>About Us</h1>
        <div className='row py-4'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={Moze1} alt="author.." />
                <h2>Moses Busee</h2>
                <h6>CEO, KukuPaY</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                
                {/* <p>I am the chief Excecutive Officer of KukuPay. Some more information about you will go here. This is just some text as a placeholder. 
                    
                </p> */}
            </div>
            

        </div>
        <div className='row py-5'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={kaka5} alt="author.." />
                <h2>Wein Nyasi</h2>
                <h6>Director, KukuPay</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>

                {/* <p>
                    I am the chief marketing officer of KukuPay. I'm a doer and make dreams come to reality. Some more content will come soon but now I will just put some text to fill up the space and blah blah  blah.
                </p> */}
            </div>
            

        </div>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={author} alt="author.." />
                <h2>Isaac Busee</h2>
                <h6>CTO, KukuPay</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                {/* <p>
                    I am Isaac Busee. I am the technical engineer of KukuPay. I think I saw a unicorn last night. Actually I think that onions are fruits. Why do you think they are round.
                </p> */}
            </div>
            

        </div>
        <div className='row py-5'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={Atu3} alt="author.." />
                <h2>Atupakisye Biswalo</h2>
                <h6>HR, KukuPay</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                {/* <p>
                    I am the chief marketing officer. I am always here to help and facilitate whatever the clients needs. Please do not hesitate to reach out to me. We are here to provide you with the best service. Our company is here to ensure that you erceive excellent service and quality.
                </p> */}
            </div>
            

        </div>
        <div className='row py-5'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={Kadada3} alt="author.." />
                <h2>Jesica Busee</h2>
                <h6>HR, KukuPay</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                {/* <p>
                    I am the chief secretary of KukuPay. A dreamer and one so good at it. I'm here to ensure to help your business needs and make sure that we make the most for your business.
                </p> */}
            </div>
        </div>
        <div className='row py-5'>
            <div className='col-lg-6 col-xm-12'>
                <div className="photo-wrap">
                <img className="profile-img" src={Bwire3} alt="author.." />
                <h2>Bwire Busee</h2>
                <h6>Chief Excutive Officer, KukuPay</h6>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                {/* <p>
                    I am the technical cheif engineer. The voice of reason. Your business needs it? We got you!
                </p> */}
            </div>
            

        </div>
        
</div>
                </>
  )
}

export default AboutUs