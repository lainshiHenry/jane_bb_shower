import React from 'react'
import RSVPForm from './RSVPForm'

const CanMakeIt = ({setThankYouInfoVisibleFunction, cookieController}) => {
  return (
    
      <RSVPForm 
        setThankYouInfoVisibleFunction={setThankYouInfoVisibleFunction} 
        cookieController={cookieController} 
      />
  )
}

export default CanMakeIt