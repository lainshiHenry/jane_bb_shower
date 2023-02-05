import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import DBController from '../Controller/DBController'
import { QuerySnapshot, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from '../Firebase';

const _dbAttendeeListTableName = 'attendeeList';

const AdminPage = ({closeAdminPageFunction}) => {
    const dbController = new DBController();
    const [attendeeList, setAttendeeList] = useState([]);

    function buildAdminList(listtoBuild) {
        return <table>
            <tr>
                <th>Name</th>
                <th>RSVP Decision</th>
                <th># of Adults</th>
                <th># of Children</th>
                <th>Has Dietary Restrictions</th>
                <th>Dietary Restrictions</th>
            </tr>
            {listtoBuild.map((element) => {
            console.log(element);
            return buildListItem(element)
        })}</table>
    }

    function _getBooleanToText(input) {
        return input ? 'Yes' : 'No';
    }

    function buildListItem(element){
        return <tr>
            <td>{element.name}</td>
            <td>{element.rsvpDecision}</td>
            <td>{element.rsvpDecision === 'Yes' ? element.numberOfAdults : ''}</td>
            <td>{element.rsvpDecision === 'Yes' ? element.numberOfChildren : ''}</td>
            <td>{element.rsvpDecision === 'Yes' ? _getBooleanToText(element.hasDietaryRestrictions) : ''}</td>
            <td>{element.rsvpDecision === 'Yes' ? (element.hasDietaryRestrictions ? element.dietaryRestrictionText : '') : ''}</td>
        </tr>
    }

    useEffect(() => {
        const q = query(collection(db, _dbAttendeeListTableName), orderBy('name', 'asc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arrObj = [];

            querySnapshot.forEach((document) => {
                const readData = document.data();
                arrObj.push({
                    name: readData.name,
                    rsvpDecision: readData.rsvpDecision,
                    numberOfAdults: readData.numberOfAdults,
                    numberOfChildren: readData.numberOfChildren,
                    hasDietaryRestrictions: readData.hasDietaryRestrictions,
                    dietaryRestrictionText: readData.dietaryRestrictionText,
                });
            })
            setAttendeeList(arrObj);
        });
        return () => unsubscribe();
    }, []);

  return (
    <div className='AdminPage'>
        AdminPage <button onClick={closeAdminPageFunction}>X</button>
        {buildAdminList(attendeeList)}
    </div>
  )
}

export default AdminPage