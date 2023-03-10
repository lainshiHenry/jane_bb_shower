import React, { useState } from 'react'
import '../App.css'
import YesBunny from '../images/yes_button.png';
import NoBunny from '../images/no_button.png';
import CannotMakeIt from './CannotMakeIt';
import CanMakeIt from './CanMakeIt';
import CanMakeItEnd from './CanMakeItEnd';
import CookieController from '../Controller/CookieController';
import SubmitButtonImage from '../images/submit_button.png';
import './RSVPForm.css'
import DBController from '../Controller/DBController';
import RSVPButtonWrapper from './RSVPButtonWrapper';

const Page3 = ({isFormCompleted = false, rsvpGoing = false}) => {
    const [isYesPressed, setIsYesPressed] = useState(false);
    const [isNoPressed, setIsNoPressed] = useState(false);
    const [nameText, setNameText] = useState('');
    const [thankYouInfoVisible, setThankYouInfoVisible] = useState(isFormCompleted);
    const [inputErrorMessageVisible, setInputErrorMessageVisible] = useState(false);
    const [isRSVPByDateVisible, setIsRSVPByDateVisible] = useState(true);
    const [isRSVPNoSubmitButtonVisible, setIsRSVPNoSubmitButtonVisible] = useState(false);
    const [isRSVPNoSubmitted, setisRSVPNoSubmitted] = useState(false);
    const [isRSVPNoPostSubmitTextVisible, setIsRSVPNoPostSubmitTextVisible] = useState(false);
    const cookieController = new CookieController();
    const dbController = new DBController();

    function _getBlock(){
        if(isYesPressed && !isNoPressed) {
            return <CanMakeIt setThankYouInfoVisibleFunction={setThankYouInfoVisible} cookieController={cookieController} attendeeName={nameText}/>
        } else if(!isYesPressed && isNoPressed) {
            return <CannotMakeIt CannotMakeItSubmitted={isRSVPNoPostSubmitTextVisible}/>
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
            setIsRSVPNoSubmitButtonVisible(false);
            setInputErrorMessageVisible(false);
        }
        setThankYouInfoVisible(false);
    }

    const _handleRSVPNoClick = () => {
        setIsNoPressed(true);
        setIsYesPressed(false);
        const YesButton = document.getElementById('rsvpYesButton');
        const NoButton = document.getElementById('rsvpNoButton');
        if(YesButton && NoButton){
            _setStyle({enableButton: NoButton, disableButton: YesButton});
            setIsRSVPByDateVisible(false);
            setIsRSVPNoSubmitButtonVisible(true);
            setInputErrorMessageVisible(false);
        }
    }

    const _handleNameTextChange = (value) => {
        setNameText(value.target.value);
    }

    const handleNoSubmit = () => {
        console.log('handleSubmit');
        if( nameText !== ''){
            dbController.handleSubmit({
                name: nameText,
            });
            setIsRSVPNoPostSubmitTextVisible(true);
            setisRSVPNoSubmitted(true);
            setIsRSVPNoSubmitButtonVisible(false);
            setInputErrorMessageVisible(false);
            cookieController.writeFormCookies({numOfDays: 30, rsvpGoing: false});
        } else {
            const inputText = document.getElementById('AttendeesNameSectionInput');
            if(inputText){
                inputText.classList.add('AttendeesNameSectionInputError');
            }
            setInputErrorMessageVisible(true);
        }
    }


  return (
    <div className='PageStyle'>
        {thankYouInfoVisible ? 
            <CanMakeItEnd /> :  
            <div className='Page3Style'>
                {isRSVPNoSubmitted ? <div></div>: <div><h1 className='rsvpTitle'>RSVP</h1>
                <label htmlFor='AttendeesNameSection' className='AttendeesNameSectionInputLabel'>Please Enter Your Name</label>
                <input type='text' value={nameText} id='AttendeesNameSectionInput' className='AttendeesNameSectionInput' onChange={(newValue) => {_handleNameTextChange(newValue)}}></input>
                <p>Can You Make it?</p>
                <div className='PageRSVPButtonWrapper'>
                    <button onClick={_handleRSVPYesClick}><img src={YesBunny} className='rsvpButton' id='rsvpYesButton'></img></button>
                    <button onClick={_handleRSVPNoClick}><img src={NoBunny} className='rsvpButton' id='rsvpNoButton'></img></button>
                </div></div>}
                {/* <RSVPButtonWrapper RSVPYesOnClick={_handleRSVPYesClick} RSVPNoOnClick={_handleRSVPNoClick}/></div>} */}
                {isRSVPNoSubmitButtonVisible ? 
                    <button onClick={handleNoSubmit} className='submitButtonStyle'>
                        <img src={SubmitButtonImage} className='submitButtonStyleImage'></img>
                    </button> : 
                    <div></div>
                }
                {isRSVPByDateVisible ? 
                    <section id='rsvpDate'>
                        <div className='hidden'>Please RSVP by: </div>
                        <div>Monday, February 20, 2023</div>
                    </section> : 
                    <div></div>
                }
                {inputErrorMessageVisible ? <div className='inputErrorMessage'>Please Enter your name</div> : <div></div>}
                {_getBlock()}
            </div>
        }
    </div>
  )
}

export default Page3