import React from 'react'
import GiftRegistryButton from '../images/gift_registry_button.png'
import './CannotMakeIt.css'

const CanMakeItEnd = () => {
    const giftRegistryClick = () => {
        alert('go to link');
    }

  return (
    <div>
        <p>Thank you!<br />You can find Jane's Gift Registry here</p>
        <p>
            <button className='CannotMakeItButton' onClick={() => {}}>
                <img src={GiftRegistryButton} className='CannotMakeItButtonImage'></img>
            </button>
            <div className='GiftRegistryLinksList'>
                <a className='GiftRegistryLink' href='https://www.amazon.ca/baby-reg/jane-yee-may-2023-winnipeg/2HTGN8Y3Z3CRP'>Amazon</a>
                <a className='GiftRegistryLink' href='https://www.babiesrus.ca/en/babyregistry-account?registryNumber=62109015'>Toys r Us</a>
            </div>
        </p>
        <p>If you have any questions, please contact: <br />Steph (204-795-6957) <br />Amy (204-294-6936)</p>
    </div>
  )
}

export default CanMakeItEnd