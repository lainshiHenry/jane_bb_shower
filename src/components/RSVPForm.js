import React, { useRef, useState } from 'react'
import './RSVPForm.css'
import DBController from '../Controller/DBController';

const RSVPForm = ({setThankYouInfoVisibleFunction, cookieController}) => {
  let numberOfAttendees = useRef();
  let hasDietaryRestrictions = false;
  const [inputName1, setInputName1] = useState('');
  const [inputName2, setInputName2] = useState('');
  const [inputName3, setInputName3] = useState('');
  const [inputName4, setInputName4] = useState('');
  const [displayInputName1, setDisplayInputName1] = useState(false);
  const [displayInputName2, setDisplayInputName2] = useState(false);
  const [displayInputName3, setDisplayInputName3] = useState(false);
  const [displayInputName4, setDisplayInputName4] = useState(false);
  const [dietaryText, setDietaryText] = useState('');
  const [displayDietary, setDisplayDietary] = useState(false);
  const dbController = new DBController();

  const handleSubmit = () => {
    dbController.handleSubmit({
      numberOfAttendees: numberOfAttendees.current,
      inputName1: inputName1,
      inputName2: inputName2,
      inputName3: inputName3,
      inputName4: inputName4,
      hasDietaryRestrictions: hasDietaryRestrictions,
      dietaryRestrictionText: dietaryText,
    });
    setThankYouInfoVisibleFunction(true);
    cookieController.writeFormCookies({numOfDays: 30});
  }

  function _addSelectedClass(index) {
    const selection1 = document.getElementById('AttendeesNumberSelectionNumber1');
    const selection2 = document.getElementById('AttendeesNumberSelectionNumber2');
    const selection3 = document.getElementById('AttendeesNumberSelectionNumber3');
    const selection4 = document.getElementById('AttendeesNumberSelectionNumber4');

    switch(index){
      case 1:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          setDisplayInputName1(true);
          setDisplayInputName2(false);
          setDisplayInputName3(false);
          setDisplayInputName4(false);
        } 
        break;
      case 2:
        if( selection2 ){
          _removeSelectedClass(selection1);
          selection2.classList.add('Selected');
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          setDisplayInputName1(true);
          setDisplayInputName2(true);
          setDisplayInputName3(false);
          setDisplayInputName4(false);
        } 
        break;
      case 3:
        if( selection3 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          selection3.classList.add('Selected');
          _removeSelectedClass(selection4);

          setDisplayInputName1(true);
          setDisplayInputName2(true);
          setDisplayInputName3(true);
          setDisplayInputName4(false);
        } 
        break;
      case 4:
        if( selection4 ){
          _removeSelectedClass(selection1);
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          selection4.classList.add('Selected');

          setDisplayInputName1(true);
          setDisplayInputName2(true);
          setDisplayInputName3(true);
          setDisplayInputName4(true);
        } 
        break;
      default:
        if( selection1 ){
          selection1.classList.add('Selected');
          _removeSelectedClass(selection2);
          _removeSelectedClass(selection3);
          _removeSelectedClass(selection4);

          setDisplayInputName1(true);
          setDisplayInputName2(false);
          setDisplayInputName3(false);
          setDisplayInputName4(false);
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
        hasDietaryRestrictions = true;
      } else {
        dietSelectionNo.classList.add('Selected');
        if(dietSelectionYes.classList.contains('Selected')){
          dietSelectionYes.classList.remove('Selected');
        }
        setDisplayDietary(false);
        hasDietaryRestrictions = false;
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

  const handleAttendeeInputChange = (numberSelected) => {
    numberOfAttendees.current = numberSelected;
    _addSelectedClass(numberSelected);
  }

  const handleDietaryInputChange = (choiceSelected) => {
    _addDietarySelectionClass(choiceSelected);
  }

  const handleAttendeeTextChange = (value, numberSelected) => {
      switch(numberSelected){
        case 1:
          setInputName1(value.target.value);
          break;
        case 2:
          setInputName2(value.target.value);
          break;
        case 3:
          setInputName3(value.target.value);
          break;
        case 4:
          setInputName4(value.target.value);
          break;
        default:
          setInputName1(value.target.value);
      }
  }

  const handleDietaryTextChange = (value) => {
    if(value.target.value) {
      setDietaryText(value.target.value);
    }
  }

  return (
    <div>
      <label htmlFor='AttendeesNumberSelection'>Number of Attendees</label>
      <div className='AttendeesNumberSelection' >
        <button className='AttendeesNumberSelectionNumber' id="AttendeesNumberSelectionNumber1" onClick={() => {handleAttendeeInputChange(1)}}>1</button>
        <button className='AttendeesNumberSelectionNumber' id="AttendeesNumberSelectionNumber2" onClick={() => {handleAttendeeInputChange(2)}}>2</button>
        <button className='AttendeesNumberSelectionNumber' id="AttendeesNumberSelectionNumber3" onClick={() => {handleAttendeeInputChange(3)}}>3</button>
        <button className='AttendeesNumberSelectionNumber' id="AttendeesNumberSelectionNumber4" onClick={() => {handleAttendeeInputChange(4)}}>4</button>
      </div>
      {displayInputName1 ? <label htmlFor='AttendeesNameSection'>Names</label> : <div></div>}
      {displayInputName1 ? <input type={"text"} value={inputName1} className="AttendeesNameSectionInput" onChange={(value) => {handleAttendeeTextChange(value, 1)}}></input> : <div></div>}
      {displayInputName2 ? <input type={"text"} value={inputName2} className="AttendeesNameSectionInput" onChange={(value) => {handleAttendeeTextChange(value, 2)}}></input> : <div></div>}
      {displayInputName3 ? <input type={"text"} value={inputName3} className="AttendeesNameSectionInput" onChange={(value) => {handleAttendeeTextChange(value, 3)}}></input> : <div></div>}
      {displayInputName4 ? <input type={"text"} value={inputName4} className="AttendeesNameSectionInput" onChange={(value) => {handleAttendeeTextChange(value, 4)}}></input> : <div></div>}
      <div style={{height: '15px'}}></div>
      <label htmlFor='DietaryRestrictionsInput' className='DietaryRestrictionsInput'>Dietary Restrictions</label>
      <div className='DietarySelection'>
        <button className='DietarySelectionChoice' id="DietarySelectionChoiceY" onClick={() => {handleDietaryInputChange(true)}}>Y</button>
        <button className='DietarySelectionChoice' id="DietarySelectionChoiceN" onClick={() => {handleDietaryInputChange(false)}}>N</button>
      </div>
      {displayDietary ? <input type={"text"} value={dietaryText} className="DietarySectionInput" onChange={(value) => {handleDietaryTextChange(value)}}></input> : <div></div>}
      <button onClick={handleSubmit} >Submit</button>
  
    </div>
  )
}

export default RSVPForm