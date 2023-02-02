import React, { useState } from 'react'
import '../App.css'
import YesBunny from '../images/yes_button.png';
import NoBunny from '../images/no_button.png';
import CannotMakeIt from './CannotMakeIt';
import CanMakeIt from './CanMakeIt';

const Page3 = () => {
    const [isYesPressed, setIsYesPressed] = useState(false);
    const [isNoPressed, setIsNoPressed] = useState(false);

    function _getBlock(){
        if(isYesPressed && !isNoPressed) {
            return <CanMakeIt />
        } else if(!isYesPressed && isNoPressed) {
            return <CannotMakeIt />
        } else {
            return <div></div>
        }
    }

    const _handleRSVPYesClick = () => {
        setIsYesPressed(true);
        setIsNoPressed(false);
    }

    const _handleRSVPNoClick = () => {
        setIsNoPressed(true);
        setIsYesPressed(false);
    }


  return (
    <div className='PageStyle'>
        <div className='Page3Style'>
            <p>RSVP</p>
            <p>Can You Make it?</p>
            <div className='PageRSVPButtonWrapper'>
                <button onClick={_handleRSVPYesClick}><img src={YesBunny} className='rsvpButton'></img></button>
                <button onClick={_handleRSVPNoClick}><img src={NoBunny} className='rsvpButton'></img></button>
            </div>
            {_getBlock()}
        </div>
    </div>
  )
}

export default Page3