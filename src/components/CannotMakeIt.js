import React from 'react'
import './CannotMakeIt.css'
import '../App.css'
import GiftRegistryButton from '../images/gift_registry_button.png'
import AmazonGiftRegistry from '../images/amazon.png'
import BBRUSGiftRegistry from '../images/BB R Us.png'

const CannotMakeIt = ({CannotMakeItSubmitted = false}) => {
    let item = <div>
        <p>We're sorry you can't make it!
            If you'd still like to contribute to a gift, please see Jane's Gift Registries here:
        </p>
        <p>
            {/* <button className='CannotMakeItButton' onClick={() => {}}>
                <img src={GiftRegistryButton} className='CannotMakeItButtonImage'></img>
            </button> */}
            <div className='GiftRegistryLinksList'>
                <a className='GiftRegistryLink' href='https://www.amazon.ca/baby-reg/jane-yee-may-2023-winnipeg/2HTGN8Y3Z3CRP'><img src={AmazonGiftRegistry}></img></a>
                <a className='GiftRegistryLink' href='https://www.babiesrus.ca/en/babyregistry-account?registryNumber=62109015'><img src={BBRUSGiftRegistry}></img></a>
            </div>
        </p>
        <p>If you'd like the gift delivered to the baby shower even if you can't attend, please message Steph (204-795-6957) for arrangements.</p>
        <p>If you have any questions, please contact: <br />Steph (204-795-6957) <br />Amy (204-294-6936)</p>
    </div>

    // return {CannotMakeItSubmitted ? item : <div></div>};
    return CannotMakeItSubmitted ? item : <div></div>;
}

export default CannotMakeIt