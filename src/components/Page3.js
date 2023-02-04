import React, { useState } from 'react'
import '../App.css'
import YesBunny from '../images/yes_button.png';
import NoBunny from '../images/no_button.png';
import CannotMakeIt from './CannotMakeIt';
import CanMakeIt from './CanMakeIt';
import CanMakeItEnd from './CanMakeItEnd';
import CookieController from '../Controller/CookieController';

const Page3 = ({isFormCompleted = false}) => {
    const [isYesPressed, setIsYesPressed] = useState(false);
    const [isNoPressed, setIsNoPressed] = useState(false);
    const [thankYouInfoVisible, setThankYouInfoVisible] = useState(isFormCompleted);
    const [isRSVPByDateVisible, setIsRSVPByDateVisible] = useState(true);
    const cookieController = new CookieController();

    function _getBlock(){
        if(isYesPressed && !isNoPressed) {
            return <CanMakeIt setThankYouInfoVisibleFunction={setThankYouInfoVisible} cookieController={cookieController}/>
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
            setIsRSVPByDateVisible(false);
        }
    }

    const _handleRSVPNoClick = () => {
        setIsNoPressed(true);
        setIsYesPressed(false);
        const YesButton = document.getElementById('rsvpYesButton');
        const NoButton = document.getElementById('rsvpNoButton');
        if(YesButton && NoButton){
            _setStyle({enableButton: NoButton, disableButton: YesButton});
            setIsRSVPByDateVisible(false);
        }
    }


  return (
    <div className='PageStyle'>
        {thankYouInfoVisible ? 
            <CanMakeItEnd /> :  
            <div className='Page3Style'>
                <p>RSVP</p>
                <p>Can You Make it?</p>
                <div className='PageRSVPButtonWrapper'>
                    <button onClick={_handleRSVPYesClick}><img src={YesBunny} className='rsvpButton' id='rsvpYesButton'></img></button>
                    <button onClick={_handleRSVPNoClick}><img src={NoBunny} className='rsvpButton' id='rsvpNoButton'></img></button>
                </div>
                {isRSVPByDateVisible ? 
                    <section id='rsvpDate'>
                        <div className='hidden'>Please RSVP by: </div>
                        <div>Date</div>
                    </section> : 
                    <div></div>
                }
                {_getBlock()}
            </div>
        }
    </div>
  )
}

export default Page3