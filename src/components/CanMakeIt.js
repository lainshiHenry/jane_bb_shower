import React from 'react'
import RSVPForm from './RSVPForm'

const CanMakeIt = ({setThankYouInfoVisibleFunction, cookieController, attendeeName}) => {
  return (
    
      <RSVPForm 
        setThankYouInfoVisibleFunction={setThankYouInfoVisibleFunction} 
        cookieController={cookieController} 
        attendeeName={attendeeName}
      />
  )
}

export default CanMakeIt