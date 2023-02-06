import React, { useRef, useState } from 'react'
import './RSVPForm.css'
import DBController from '../Controller/DBController';
import SubmitButtonImage from '../images/submit_button.png';

const RSVPForm = ({setThankYouInfoVisibleFunction, cookieController, attendeeName}) => {
  let numberOfAdults = useRef();
  let numberOfChildren = useRef();
  let hasDietaryRestrictions = useRef(false);
  const [dietaryText, setDietaryText] = useState('');
  const [displayDietary, setDisplayDietary] = useState(false);
  const [inputErrorMessageVisible, setInputErrorMessageVisible] = useState(false);
  const dbController = new DBController();

  const handleSubmit = () => {
    if( attendeeName !== '' && numberOfAdults.current >= 1 ){
      dbController.handleSubmit({
        name: attendeeName,
        rsvpDecision: "Yes",
        numberOfAdults: numberOfAdults.current,
        numberOfChildren: numberOfChildren.current,
        hasDietaryRestrictions: hasDietaryRestrictions.current,
        dietaryRestrictionText: dietaryText,
      });
      setThankYouInfoVisibleFunction(true);
      setInputErrorMessageVisible(false);
      cookieController.writeFormCookies({numOfDays: 30, rsvpGoing: true});
    } else {
      const inputText = document.getElementById('AttendeesNameSectionInput');
        if(inputText){
            inputText.classList.add('AttendeesNameSectionInputError');
        }
        setInputErrorMessageVisible(true);
    }
  }

  function _addSelectedClassToNumChildren(index) {
    const selection1 = document.getElementById('NumberOfChildrenSelection1');
    const selection2 = document.getElementById('NumberOfChildrenSelection2');
    const selection3 = document.getElementById('NumberOfChildrenSelection3');
    const selection4 = document.getElementById('NumberOfChildrenSelection4');

    switch(index){
      case 1:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(false);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
      case 2:
        if( selection2 ){
          _removeSelectedClass(selection1);
          selection2.classList.add('Selected');
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
      case 3:
        if( selection3 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          selection3.classList.add('Selected');
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(true);
          // setDisplayInputName4(false);
        } 
        break;
      case 4:
        if( selection4 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          selection4.classList.add('Selected');

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(true);
          // setDisplayInputName4(true);
        } 
        break;
      default:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(false);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
    }
  }

  function _addSelectedClassToNumAdults(index) {
    const selection1 = document.getElementById('NumberOfAdultsSelection1');
    const selection2 = document.getElementById('NumberOfAdultsSelection2');
    const selection3 = document.getElementById('NumberOfAdultsSelection3');
    const selection4 = document.getElementById('NumberOfAdultsSelection4');

    switch(index){
      case 1:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(false);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
      case 2:
        if( selection2 ){
          _removeSelectedClass(selection1);
          selection2.classList.add('Selected');
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
      case 3:
        if( selection3 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          selection3.classList.add('Selected');
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(true);
          // setDisplayInputName4(false);
        } 
        break;
      case 4:
        if( selection4 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          selection4.classList.add('Selected');

          // setDisplayInputName1(true);
          // setDisplayInputName2(true);
          // setDisplayInputName3(true);
          // setDisplayInputName4(true);
        } 
        break;
      default:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          // setDisplayInputName1(true);
          // setDisplayInputName2(false);
          // setDisplayInputName3(false);
          // setDisplayInputName4(false);
        } 
        break;
    }
  }

  function _addDietarySelectionClass(choiceSelectedBool) {
    const dietSelectionYes = document.getElementById('DietarySelectionChoiceY');
    const dietSelectionNo = document.getElementById('DietarySelectionChoiceN');

    if( dietSelectionYes && dietSelectionNo ){
      if(choiceSelectedBool){
        dietSelectionYes.classList.add('Selected');
        if(dietSelectionNo.classList.contains('Selected')){
          dietSelectionNo.classList.remove('Selected');
        }
        setDisplayDietary(true);
        hasDietaryRestrictions.current = true;
      } else {
        dietSelectionNo.classList.add('Selected');
        if(dietSelectionYes.classList.contains('Selected')){
          dietSelectionYes.classList.remove('Selected');
        }
        setDisplayDietary(false);
        hasDietaryRestrictions.current = false;
      }
    }
  }

  function _removeSelectedClass(node) {
    if( node ) {
      if( node.classList.contains('Selected') ){
        node.classList.remove('Selected');
      }
    }
  }

  // const handleAttendeeInputChange = (numberSelected) => {
  //   numberOfAttendees.current = numberSelected;
  //   _addSelectedClass(numberSelected);
  // }

  const handleNumOfAdultInputChange = (numberSelected) => {
    numberOfAdults.current = numberSelected;
    _addSelectedClassToNumAdults(numberSelected);
  }

  const handleNumOfChildrenInputChange = (numberSelected) => {
    numberOfChildren.current = numberSelected;
    _addSelectedClassToNumChildren(numberSelected);
  }

  const handleDietaryInputChange = (choiceSelected) => {
    _addDietarySelectionClass(choiceSelected);
  }

  const handleDietaryTextChange = (value) => {
      setDietaryText(value.target.value);
  }
  

  return (
    <div>
      <label htmlFor='NumberOfAdultsSelection'>Number of Adults</label>
      <div className='NumberOfAdultsSelection AttendeesNumberSelection' >
        <button className='AttendeesNumberSelectionNumber' id="NumberOfAdultsSelection1" onClick={() => {handleNumOfAdultInputChange(1)}}>1</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfAdultsSelection2" onClick={() => {handleNumOfAdultInputChange(2)}}>2</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfAdultsSelection3" onClick={() => {handleNumOfAdultInputChange(3)}}>3</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfAdultsSelection4" onClick={() => {handleNumOfAdultInputChange(4)}}>4</button>
      </div>
      <label htmlFor='NumberOfChildrenSelection'>Number of Children</label>
      <div className='NumberOfChildrenSelection AttendeesNumberSelection' >
        <button className='AttendeesNumberSelectionNumber' id="NumberOfChildrenSelection1" onClick={() => {handleNumOfChildrenInputChange(1)}}>1</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfChildrenSelection2" onClick={() => {handleNumOfChildrenInputChange(2)}}>2</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfChildrenSelection3" onClick={() => {handleNumOfChildrenInputChange(3)}}>3</button>
        <button className='AttendeesNumberSelectionNumber' id="NumberOfChildrenSelection4" onClick={() => {handleNumOfChildrenInputChange(4)}}>4</button>
      </div>
      <div style={{height: '15px'}}></div>
      <label htmlFor='DietaryRestrictionsInput' className='DietaryRestrictionsInput'>Dietary Restrictions</label>
      <div className='DietarySelection'>
        <button className='DietarySelectionChoice' id="DietarySelectionChoiceY" onClick={() => {handleDietaryInputChange(true)}}>Y</button>
        <button className='DietarySelectionChoice' id="DietarySelectionChoiceN" onClick={() => {handleDietaryInputChange(false)}}>N</button>
      </div>
      {displayDietary ? <input type={"text"} value={dietaryText} className="DietarySectionInput" onChange={(value) => {handleDietaryTextChange(value)}}></input> : <div></div>}
      <button onClick={handleSubmit} className='submitButtonStyle'>
        <img src={SubmitButtonImage} className='submitButtonStyleImage'></img>
      </button>
      {inputErrorMessageVisible ? <div className='inputErrorMessage'>Please Enter your name</div> : <div></div>}
    </div>
  )
}

export default RSVPForm