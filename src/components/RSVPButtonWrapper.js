import React from 'react'
import './RSVPButtonWrapper.css'
import YesBunny from '../images/yes_button.png'
import NoBunny from '../images/no_button.png';
import RSVPButtonWrapperButton from './RSVPButtonWrapperButton';


const RSVPButtonWrapper = ({RSVPYesOnClick, RSVPNoOnClick}) => {
  return (
    <div className='PageRSVPButtonWrapper'>
        <RSVPButtonWrapperButton onClickFunction={RSVPYesOnClick} buttonImgSrc={YesBunny} id='rsvpYesButton' />
        <RSVPButtonWrapperButton onClickFunction={RSVPNoOnClick} buttonImgSrc={NoBunny} id='rsvpNoButton' />
        {/* <button onClick={_handleRSVPYesClick}><img src={YesBunny} className='rsvpButton' id='rsvpYesButton'></img></button>
        <button onClick={_handleRSVPNoClick}><img src={NoBunny} className='rsvpButton' id='rsvpNoButton'></img></button> */}
    </div>
  )
}

export default RSVPButtonWrapper