import React from 'react'
import '../App.css'
import YesBunny from '../images/yes_button.png';
import NoBunny from '../images/no_button.png';

const Page3 = () => {
  return (
    <div className='PageStyle'>
        <p>RSVP</p>
        <p>Can You Make it?</p>
        <div className='PageRSVPWrapper'>
            <img src={YesBunny} className='rsvpButton'></img>
            <img src={NoBunny} className='rsvpButton'></img>
        </div>
    </div>
  )
}

export default Page3