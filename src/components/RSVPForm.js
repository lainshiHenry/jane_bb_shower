import React from 'react'

const RSVPForm = () => {
  return (
    <div>
        <form>
            <label>Number of Attendees</label>
            <label>Dietary Restrictions</label>
            <label>For Thank you Cards</label>
            <label htmlFor='emailInput'>Email</label>
            <input type={"email"} id="emailInput"></input>
            <label htmlFor="mailingAddressInput">Mailing Address</label>
            <input type={"text"} id="mailingAddressInput"></input>
            <button type={'submit'} >Submit</button>
        </form>
    </div>
  )
}

export default RSVPForm