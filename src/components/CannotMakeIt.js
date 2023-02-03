import React from 'react'
import './CannotMakeIt.css'
import '../App.css'
import GiftRegistryButton from '../images/gift_registry_button.png'

const CannotMakeIt = () => {
    const giftRegistryClick = () => {
        alert('go to link');
    }

  return (
    <div>
        <p>We're sorry you can't make it!
            If you'd still like to contribute to a gift, please see Jane's Gift Registry
        </p>
        <p>
            <button className='CannotMakeItButton' onClick={giftRegistryClick}>
                <img src={GiftRegistryButton} className='CannotMakeItButtonImage'></img>
            </button>
        </p>
        <p>If you'd like the gift delivered to the baby shower even if you can't attend. Please message Steph (204-795-6957) for arrangements.</p>
        <p>If you have any questions, please contact: <br />Steph (204-795-6957) <br />Amy (204-294-6936)</p>
    </div>
  )
}

export default CannotMakeIt