import React from 'react'
import './RSVPButtonWrapperButton.css'

const RSVPButtonWrapperButton = ({onClickFunction, buttonImgSrc, buttonId}) => {
  return (
    <button onClick={onClickFunction}>
        <img src={buttonImgSrc} className='rsvpButton' id={buttonId}></img>
    </button>
  )
}

export default RSVPButtonWrapperButton