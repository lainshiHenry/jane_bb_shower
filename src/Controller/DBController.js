import {addDoc, collection} from 'firebase/firestore'
import db from '../Firebase';

const _dbAttendeeListTableName = 'attendeeList';

export default class DBController{
    async handleSubmit({
        //still have decision and name
        numberOfAdults = 0, 
        numberOfChildren = 0,
        rsvpDecision = 'No',
        name = '',
        hasDietaryRestrictions = false, 
        dietaryRestrictionText = ''}){
        try{
            await addDoc(collection(db, _dbAttendeeListTableName), {
                numberOfAdults: numberOfAdults,
                numberOfChildren: numberOfChildren,
                rsvpDecision: rsvpDecision,
                name: name,
                hasDietaryRestrictions: hasDietaryRestrictions,
                dietaryRestrictionText: dietaryRestrictionText,
            });
        } catch (err) {
            console.log(err);
        }
    }
}