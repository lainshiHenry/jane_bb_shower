import React from 'react'

const RSVPForm = ({setThankYouInfoVisibleFunction, cookieController}) => {

  const handleSubmit = () => {
    setThankYouInfoVisibleFunction(true);
    cookieController.writeFormCookies();
}

  return (
    <div>
        <form>
            <label htmlFor='AttendeesInput'>Number of Attendees</label>
            <input type={"text"} id="AttendeesInput"></input>
            <label htmlFor='DietaryRestrictionsInput'>Dietary Restrictions</label>
            <input type={"text"} id="DietaryRestrictionsInput"></input>
            <button onClick={handleSubmit} >Submit</button>
        </form>
    </div>
  )
}

export default RSVPForm