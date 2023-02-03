import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import DBController from '../Controller/DBController'
import { QuerySnapshot, collection, onSnapshot, query } from 'firebase/firestore';
import db from '../Firebase';

const _dbAttendeeListTableName = 'attendeeList';

const AdminPage = ({closeAdminPageFunction}) => {
    const dbController = new DBController();
    const [attendeeList, setAttendeeList] = useState([]);

    function buildAdminList(listtoBuild) {
        return <ul>{listtoBuild.map((element) => {
            console.log(element);
            return buildListItem(element)
        })}</ul>
    }

    function buildListItem(element){
        return <li>{element}</li>
    }

    useEffect(() => {
        const q = query(collection(db, _dbAttendeeListTableName));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arrObj = [];

            querySnapshot.forEach((document) => {
                const readData = document.data();
                arrObj.push(readData.inputName1);
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