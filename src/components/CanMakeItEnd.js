import React from 'react'
import GiftRegistryButton from '../images/gift_registry_button.png'

const CanMakeItEnd = () => {
    const giftRegistryClick = () => {
        alert('go to link');
    }

  return (
    <div>
        <p>Thank you!<br />You can find Jane's Gift Registry here</p>
        <p>
            <button className='CannotMakeItButton' onClick={giftRegistryClick}>
                <img src={GiftRegistryButton} className='CannotMakeItButtonImage'></img>
            </button>
        </p>
        <p>If you have any questions, please contact: <br />Steph (204-795-6957) <br />Amy (204-294-6936)</p>
    </div>
  )
}

export default CanMakeItEnd