import React from 'react'
import './AdminPage.css'

const AdminPage = ({closeAdminPageFunction}) => {
  return (
    <div className='AdminPage'>AdminPage <button onClick={closeAdminPageFunction}>X</button></div>
  )
}

export default AdminPage