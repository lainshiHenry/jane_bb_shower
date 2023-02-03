// import logo from './logo.svg';
import React, { useState, useRef } from 'react'
import logo from './images/bunny_website_bun.png';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import CookieController from './Controller/CookieController';
import './fonts/odstemplik.otf';
import AdminPage from './components/AdminPage';

function App() {
  const [displayAdminPage, setDisplayAdminPage] = useState(false);
  const cookieController = new CookieController();
  let isFormCompleted = false;
  let adminClickCount = useRef(0);

  function load(){
    isFormCompleted = cookieController.getCookieValue();
  }
  
  const openDisplayAdminPage = () => {
    if(adminClickCount.current > 10){
      setDisplayAdminPage(true);
    } else {
      adminClickCount.current++;
    }
    
  }

  const closeDisplayAdminPage = () => {
    setDisplayAdminPage(false);
  }

  const devDeleteCookies = () => {
    cookieController.deleteCookies();
  }

  load();
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='AnimationSection' onClick={devDeleteCookies}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='content' id='contentBlock'>
          <Page1 />
          <Page2 />
          <Page3 isFormCompleted={isFormCompleted}/>
        </div>
      </header>
      {displayAdminPage ? <AdminPage closeAdminPageFunction={closeDisplayAdminPage}/> : <div onClick={openDisplayAdminPage} style={{height: '20px', width: '20px', backgroundColour: 'white', position: 'absolute', top: '0', left: '0'}}></div>}
    </div>
  );
}

export default App;
