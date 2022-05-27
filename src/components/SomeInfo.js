import React from 'react';
import ShakingHands from '../images/shakeHands.png'

const SomeInfo = () => {
  return (
    <>



    <div className='someInfo-wrapper py-5'>
      <div className="info-container">

      <div className="box1 py-5">
        <h2>Official Site</h2>
          <img className='smallogo' src={ShakingHands} alt="author" />

        <p>We are trailblazers and pioneers. We are leaders in business solutions and innovations.</p>
      </div>
      </div>
      <div className="box1 py-5">
        <p>  We pioneer in data analytics and paving the way best way forward according to current business trends. <br />
            With us the possibilities are endless and the sky is the limit. 
            We are a business found and rooted in seeking solutions for day to day problems. We win when you do. </p>
      </div>
            
      </div>

    

    </>
  )
}

export default SomeInfo