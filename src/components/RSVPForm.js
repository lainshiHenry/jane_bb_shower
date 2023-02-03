import React, { useState } from 'react'
import './RSVPForm.css'

const RSVPForm = ({setThankYouInfoVisibleFunction, cookieController}) => {
  const [inputName1, setInputName1] = useState('');
  const [inputName2, setInputName2] = useState('');
  const [inputName3, setInputName3] = useState('');
  const [inputName4, setInputName4] = useState('');
  const [displayInputName1, setDisplayInputName1] = useState(false);
  const [displayInputName2, setDisplayInputName2] = useState(false);
  const [displayInputName3, setDisplayInputName3] = useState(false);
  const [displayInputName4, setDisplayInputName4] = useState(false);
  const [dietaryText, setDietaryText] = useState('');
  const [dusplayDietary, setDisplayDietary] = useState(false);

  const handleSubmit = () => {
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

  function _removeSelectedClass(node) {
    if( node ) {
      if( node.classList.contains('Selected') ){
        node.classList.remove('Selected');
      }
    }
  }

  const handleAttendeeInputChange = (numberSelected) => {
    console.log('selected' + numberSelected);
    _addSelectedClass(numberSelected);
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
      <label htmlFor='DietaryRestrictionsInput'>Dietary Restrictions</label>
      <input type={"text"} id="DietaryRestrictionsInput"></input>
      <button onClick={handleSubmit} >Submit</button>
  
    </div>
  )
}

export default RSVPForm