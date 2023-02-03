import React from 'react'
import RSVPForm from './RSVPForm'

const CanMakeIt = ({setThankYouInfoVisibleFunction, cookieController}) => {
  return (
    <div>
      <RSVPForm 
        setThankYouInfoVisibleFunction={setThankYouInfoVisibleFunction} 
        cookieController={cookieController} 
      />
    </div>
  )
}

export default CanMakeIt