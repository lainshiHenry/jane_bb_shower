import {addDoc, collection} from 'firebase/firestore'
import db from '../Firebase';

const _dbAttendeeListTableName = 'attendeeList';

export default class DBController{
    async handleSubmit({
        numberOfAttendees, 
        inputName1 = '', 
        inputName2 = '', 
        inputName3 = '', 
        inputName4 = '', 
        hasDietaryRestrictions = false, 
        dietaryRestrictionText = ''}){
        try{
            await addDoc(collection(db, _dbAttendeeListTableName), {
                numberOfAttendees: numberOfAttendees,
                inputName1: inputName1,
                inputName2: inputName2,
                inputName3: inputName3,
                inputName4: inputName4,
                hasDietaryRestrictions: hasDietaryRestrictions,
                dietaryRestrictionText: dietaryRestrictionText,
            });
        } catch (err) {
            console.log(err);
        }
    }
}