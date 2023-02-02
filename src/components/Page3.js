import React, { useState } from 'react'
import '../App.css'
import YesBunny from '../images/yes_button.png';
import NoBunny from '../images/no_button.png';
import CannotMakeIt from './CannotMakeIt';
import CanMakeIt from './CanMakeIt';

const Page3 = () => {
    const [isYesPressed, setIsYesPressed] = useState(false);
    const [isNoPressed, setIsNoPressed] = useState(false);

    function _getBlock(){
        if(isYesPressed && !isNoPressed) {
            return <CanMakeIt />
        } else if(!isYesPressed && isNoPressed) {
            return <CannotMakeIt />
        } else {
            return <div></div>
        }
    }

    function _automaticScrollToBottom(){
        const contentBlock = document.getElementById('contentBlock');
        contentBlock.scrollTop = contentBlock.scrollHeight;
    }

    function _setStyle({enableButton, disableButton}){
        if(enableButton && disableButton){
            enableButton.classList.add('rsvpSelectedButton');
            if(enableButton.classList.contains('rsvpUnselectedButton')) {
                enableButton.classList.remove('rsvpUnselectedButton');
            }
            disableButton.classList.add('rsvpUnselectedButton');
            if(disableButton.classList.contains('rsvpSelectedButton')) {
                disableButton.classList.remove('rsvpSelectedButton');
            }
        }
        _automaticScrollToBottom();
    }

    const _handleRSVPYesClick = () => {
        setIsYesPressed(true);
        setIsNoPressed(false);
        const YesButton = document.getElementById('rsvpYesButton');
        const NoButton = document.getElementById('rsvpNoButton');
        if(YesButton && NoButton){
            _setStyle({enableButton: YesButton, disableButton: NoButton});
        }
    }

    const _handleRSVPNoClick = () => {
        setIsNoPressed(true);
        setIsYesPressed(false);
        const YesButton = document.getElementById('rsvpYesButton');
        const NoButton = document.getElementById('rsvpNoButton');
        if(YesButton && NoButton){
            _setStyle({enableButton: NoButton, disableButton: YesButton});
        }
    }


  return (
    <div className='PageStyle'>
        <div className='Page3Style'>
            <p>RSVP</p>
            <p>Can You Make it?</p>
            <div className='PageRSVPButtonWrapper'>
                <button onClick={_handleRSVPYesClick}><img src={YesBunny} className='rsvpButton' id='rsvpYesButton'></img></button>
                <button onClick={_handleRSVPNoClick}><img src={NoBunny} className='rsvpButton' id='rsvpNoButton'></img></button>
            </div>
            {_getBlock()}
        </div>
    </div>
  )
}

export default Page3